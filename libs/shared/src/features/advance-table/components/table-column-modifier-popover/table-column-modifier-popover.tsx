import {
  Icon,
  PopoverActionEvent,
  PopoverActionProps,
  usePopover,
} from '@myapp/shared/components';
import { useNotify } from '@myapp/shared/hooks';
import {
  classnames,
  localStorageGet,
  localStorageSet,
} from '@myapp/shared/utils';
import { Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useEffect, useMemo, useState } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { TableColumnModifierPopoverProps as Props } from './types';

export const TableColumnModifierPopover = ({
  className,
  id,
  icon,
  title,
  items,
  element,
  disableStorage,
  onSubmit,
}: Props) => {
  const theme = useTheme();
  const notify = useNotify();
  const popover = usePopover();
  const [columns, setColumns] = useState(() =>
    disableStorage ? items : localStorageGet(id, items)
  );

  useEffect(() => {
    setColumns(items); // TODO this might cause side effects
  }, [items]);

  const actions: PopoverActionProps[] = useMemo(() => {
    const handleSave: PopoverActionEvent = (e) => {
      e.showLoading();
      setTimeout(() => {
        notify.success('Layout saved successfully');
        if (!disableStorage) localStorageSet(id, columns);
        e.onClose();
      }, 1000);
    };

    const onClickSaveLayout: PopoverActionEvent = (e) => {
      if (onSubmit) onSubmit({ ...e, extra: columns });
      else handleSave(e);
    };

    return [
      {
        variant: 'contained',
        color: 'primary',
        size: 'small',
        children: 'Save Layout',
        showSpinner: true,
        onClick: onClickSaveLayout,
      },
    ];
  }, [columns, disableStorage, id, notify, onSubmit]);

  return (
    <Styled.Wrapper
      className={classnames('TableColumnModifierPopover', className)}
      state={popover}
      title={
        <Styled.Title>
          {icon !== false && (
            <Icon
              color={lighten(theme.palette.primary.main, 0.5)}
              name={icon || 'setting-1'}
            />
          )}
          {title || <Typography color="primary">Edit Columns</Typography>}
        </Styled.Title>
      }
      titleSx={{ borderColor: 'divider', justifyContent: 'center' }}
      contentSx={SX.content}
      selectable
      element={
        element ?? (
          <Styled.Button variant="text" sx={SX.button}>
            <Icon size={18} name={icon || 'setting-1'} />
          </Styled.Button>
        )
      }
      actionsSx={SX.actions}
      actions={actions}
      items={columns}
      onChange={setColumns}
    />
  );
};

TableColumnModifierPopover.displayName = 'TableColumnModifierPopover';
