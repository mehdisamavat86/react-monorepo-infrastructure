import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { useBoolean } from '@myapp/shared/hooks';
import { SxStyle } from '@myapp/shared/theme';
import { classnames } from '@myapp/shared/utils';
import { cloneElement, createElement, memo, useMemo } from 'react';
import { Icon } from '../icon';
import * as Styled from './styles';
import * as SX from './sx';
import type { CustomDialogProps as Props } from './types';

export const CustomDialog = memo(
  ({
    className,
    state: _state,
    loading,
    headerSx,
    title,
    titleSx,
    subTitle,
    subTitleSx,
    icon,
    iconSx,
    children,
    content,
    contentSx,
    actions: _actions,
    actionsSx,
    actionsPrepend,
    closeButton,
    defaultOpen,
    uncontrolledElement,
    onOpen,
    onClose,
    disabled,
    ...other
  }: Props) => {
    const defaultState = useBoolean(!!defaultOpen, (v) => {
      if (v) onOpen?.();
      else onClose?.();
    });
    const state = _state || defaultState;
    const onClickUncontrolledElement = () => {
      if (!disabled) state.onToggle();
    };

    content = children ?? content;
    const actions = useMemo(() => {
      const result = _actions || [];
      if (closeButton !== false)
        result.push({
          variant: 'outlined',
          ...closeButton!,
          children: closeButton?.children || 'Cancel',
          closer: true,
        });

      return result.map((x) => ({
        ...x,
        [x.spinning ? 'loading' : 'disabled']: loading,
        ...(x.disabled ? { disabled: x.disabled } : {}),
      }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_actions, closeButton, loading]);

    return (
      <>
        {uncontrolledElement &&
          cloneElement(uncontrolledElement, {
            ...uncontrolledElement.props,
            onClick: onClickUncontrolledElement,
          })}

        <Styled.Wrapper
          className={classnames('CustomDialog', className)}
          maxWidth="xs"
          open={state.value}
          onClose={state.onFalse}
          {...other}
        >
          {title && (
            <Styled.Header sx={{ pb: 2, ...headerSx }}>
              <Box sx={{ ...SX.header, ...titleSx } as SxStyle}>
                <Box sx={SX.title}>
                  {icon && <Icon name={icon} sxx={iconSx} />}
                  {title}
                </Box>
                <Box display="flex">
                  <Icon
                    name="close"
                    size={20}
                    onClick={state.onFalse}
                    sxx={SX.closeIconSx}
                  />
                </Box>
              </Box>
              <Styled.SubTitle sx={subTitleSx}>{subTitle}</Styled.SubTitle>
            </Styled.Header>
          )}

          {content && (
            <Styled.Content sx={{ p: 2, ...contentSx }}>
              {content}
            </Styled.Content>
          )}

          {(!!actions.length || actionsPrepend) && (
            <Styled.Actions
              sx={{
                ...actionsSx,
              }}
            >
              {actionsPrepend}
              {actions?.map(({ closer, ...props }, key) =>
                createElement(LoadingButton, {
                  ...props,
                  key,
                  onClick: (event: any) => {
                    props.onClick?.({ toggle: state.onFalse, event });
                    if (closer) state.onFalse();
                  },
                })
              )}
            </Styled.Actions>
          )}
        </Styled.Wrapper>
      </>
    );
  }
);

CustomDialog.displayName = 'CustomDialog';
