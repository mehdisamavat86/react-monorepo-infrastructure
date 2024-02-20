import { Icon, usePopover } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { Button } from '@mui/material';
import { merge } from 'lodash-es';
import { cloneElement, memo, useState } from 'react';
import { Action } from './components/action';
import * as Styled from './styles';
import * as SX from './sx';
import type { ActionGroupItem, ActionGroupProps as Props } from './types';

export const ActionGroup = memo(
  ({ className, buttonProps, items, closeEl, sx, contentSx }: Props) => {
    const popover = usePopover();
    const [activeItem, setActiveItem] = useState<ActionGroupItem | undefined>(
      () => items.find((x) => x.isDefault)
    );

    const handleClose = () => {
      popover.onClose();
      setActiveItem(items.find((x) => x.isDefault));
    };

    return (
      <Styled.Wrapper
        className={classnames('ActionGroup', className)}
        sx={merge(SX.root, sx)}
        contentSx={merge(SX.content, sx)}
        state={popover}
        element={
          <Button variant="outlined" children="Actions" {...buttonProps} />
        }
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Styled.Content className="ActionGroupContent" sx={contentSx}>
          {activeItem
            ? cloneElement(activeItem.children, {
                onFinish: handleClose,
              })
            : items.map((x, key) => (
                <Action key={key} item={x} onClick={setActiveItem} />
              ))}

          {closeEl ? (
            cloneElement(closeEl, { onClick: handleClose })
          ) : (
            <Icon name="close" onClick={handleClose} color="grey" />
          )}
        </Styled.Content>
      </Styled.Wrapper>
    );
  }
);

ActionGroup.displayName = 'ActionGroup';
