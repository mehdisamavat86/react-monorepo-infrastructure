import { Typography, useTheme } from '@mui/material';
import { useBoolean } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { cloneElement, memo, useEffect } from 'react';
import { Scrollbar } from '../scrollbar';
import * as Styled from './styles';
import type { CustomDrawerProps as Props } from './types';

export const CustomDrawer = memo(
  ({
    className,
    state,
    width,
    children,
    contentWrapperSx,
    content,
    icon,
    title,
    titleSx,
    position,
    defaultOpen,
    uncontrolledElement,
    onOpen,
    onClose,
    ...other
  }: Props) => {
    const theme = useTheme();
    const defaultState = useBoolean(!!defaultOpen);
    const open = state || defaultState;
    content = children ?? content;

    useEffect(() => {
      if (open.value) onOpen?.();
      else onClose?.();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open.value]);

    return (
      <>
        {uncontrolledElement &&
          cloneElement(uncontrolledElement, {
            ...uncontrolledElement.props,
            onClick: open.onToggle,
          })}

        <Styled.Wrapper
          className={classnames('CustomDrawer', className)}
          open={open.value}
          onClose={open.onFalse}
          {...other}
          anchor={position || 'right'}
          slotProps={{
            backdrop: { invisible: true },
          }}
          PaperProps={{
            sx: { width: 1, maxWidth: width || 420, minHeight: 1 },
          }}
        >
          <Scrollbar
            className="DrawerContentScrollBar"
            classNames={{ contentEl: 'DrawerContentScrollBar_Content' }}
            sx={{
              height: 1,
              '& .simplebar-content-wrapper': {
                paddingBottom: theme.spacing(2),
              },
            }}
          >
            {title && (
              <Styled.Header>
                {icon && <Styled.HeaderIcon onClick={onClose} name={icon} />}
                <Typography
                  variant="subtitle1"
                  sx={{ flexGrow: 1, ...titleSx }}
                >
                  {title}
                </Typography>
              </Styled.Header>
            )}

            {content && (
              <Styled.Content sx={contentWrapperSx}>{content}</Styled.Content>
            )}
          </Scrollbar>
        </Styled.Wrapper>
      </>
    );
  }
);

CustomDrawer.displayName = 'CustomDrawer';
