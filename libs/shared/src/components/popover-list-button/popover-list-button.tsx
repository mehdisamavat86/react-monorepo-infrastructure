import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { CustomPopover, usePopover } from '../custom-popover';
import { Icon } from '../icon';
import { IconButton } from '../icon-button';
import * as Styled from './styles';
import type { PopoverListButtonProps as Props } from './types';

export const PopoverListButton = memo(
  ({
    className,
    items,
    itemSx,
    itemDivider,
    icon,
    buttonElement,
    buttonProps,
    closeAfterSelect,
    onSelect,
  }: Props) => {
    const popover = usePopover();

    return (
      <Styled.Wrapper className={classnames('PopoverListButton', className)}>
        <CustomPopover
          state={popover}
          element={
            buttonElement ?? (
              <IconButton icon={icon || 'more-vertical'} {...buttonProps} />
            )
          }
          contentSx={{ p: 0 }}
        >
          {items.map((x) => (
            <Styled.MenuItem
              className={classnames({ divider: itemDivider })}
              key={x.key}
              sx={{
                ...itemSx,
                justifyContent: x.icon ? 'flex-start' : 'center',
              }}
              disabled={popover.loading}
              onClick={() => {
                if (closeAfterSelect !== false) popover.onClose();
                onSelect?.(x, popover);
              }}
            >
              {x.icon && <Icon name={x.icon} />}
              {x.label}
            </Styled.MenuItem>
          ))}
        </CustomPopover>
      </Styled.Wrapper>
    );
  }
);

PopoverListButton.displayName = 'PopoverListButton';
