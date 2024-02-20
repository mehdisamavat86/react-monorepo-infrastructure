import { classnames } from '@myapp/shared/utils';
import { LoadingButton } from '@mui/lab';
import { Popover, PopoverOrigin } from '@mui/material';
import { cloneElement, createElement, MouseEvent, ReactNode } from 'react';
import { Icon } from '../icon';
import * as Styled from './styles';
import { PopoverActionProps as ActionProps, CustomPopoverProps } from './types';
import usePopover from './use-popover';
import { getPosition } from './utils';

export default function CustomPopover({
  className,
  children,
  arrowPosition: arrow = 'top-right',
  showArrow,
  arrowSx,
  sx,
  element,
  state: _state,
  title,
  titleSx,
  icon,
  content,
  contentSx,
  actions,
  actionsSx,
  backdropClosable,
  openClassName = 'open',
  onClose,
  ...other
}: CustomPopoverProps) {
  const { style, anchorOrigin, transformOrigin } = getPosition(arrow);
  const defaultState = usePopover();
  const state = _state || defaultState;
  content = (children as ReactNode) ?? content;

  const handleClose = () => {
    if (backdropClosable === false || state.loading) return;
    state.onClose();
    onClose?.();
  };

  const renderAction = (
    { showSpinner, closer, ...props }: ActionProps,
    key: number
  ) =>
    createElement(LoadingButton, {
      ...props,
      key,
      [showSpinner ? 'loading' : 'disabled']: state.loading,
      ...(props.disabled ? { disabled: props.disabled } : {}),
      onClick: (event: any) => {
        props.onClick?.({ event, ...state });
        if (closer) state.onClose();
      },
    });

  return (
    <>
      {element &&
        cloneElement(element, {
          ...element.props,
          className: classnames(element.props.className, {
            [openClassName]: state.open,
          }),
          onClick: (e: MouseEvent<HTMLElement>) => {
            state.setOpen(e.currentTarget as HTMLElement);
          },
        })}

      <Popover
        className={classnames('CustomPopover', className)}
        open={!!state.open}
        anchorEl={other.anchorEl ?? state.open}
        anchorOrigin={anchorOrigin as PopoverOrigin}
        transformOrigin={transformOrigin as PopoverOrigin}
        slotProps={{
          paper: {
            sx: {
              width: 'auto',
              overflow: 'auto',
              ...style,
              ...sx,
            },
          },
        }}
        closeAfterTransition
        onClose={handleClose}
        {...other}
      >
        {showArrow && <Styled.Arrow sx={arrowSx} arrow={arrow} />}
        <Styled.Content className="CustomPopoverContent">
          {title && (
            <Styled.Title sx={titleSx}>
              {icon && <Icon name={icon} />}
              {title}
            </Styled.Title>
          )}

          <Styled.Main sx={contentSx} className="CustomPopoverMainContent">
            {content}
          </Styled.Main>

          {actions && (
            <Styled.Actions sx={actionsSx}>
              {actions?.map(renderAction)}
            </Styled.Actions>
          )}
        </Styled.Content>
      </Popover>
    </>
  );
}
