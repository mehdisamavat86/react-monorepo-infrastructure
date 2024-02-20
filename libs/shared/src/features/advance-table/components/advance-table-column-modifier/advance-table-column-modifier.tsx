import { useUpdatePresetMutationApi } from '@myapp/shared/api';
import { useCreatePresetMutationApi } from '@myapp/shared/api/preset/use-create-preset-mutation-api';
import { useNotify } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { ADVANCE_TABLE_COLUMN_MODIFIER_PRESET_TYPE as PRESET_TYPE } from '../../constant';
import { useAdvanceTableColumnModifierData } from '../../hooks/use-advance-table-column-modifier-data';
import { TableColumnModifierPopoverProps } from '../table-column-modifier-popover';
import * as Styled from './styles';
import type { AdvanceTableColumnModifierProps as Props } from './types';
import { obtainTableModifierData } from './util';

export const AdvanceTableColumnModifier = ({ className, element }: Props) => {
  const notify = useNotify();
  const { data, config, applyPresetOnConfig } =
    useAdvanceTableColumnModifierData();
  const apiCreate = useCreatePresetMutationApi();
  const apiUpdate = useUpdatePresetMutationApi(data?.id || '');
  const items = obtainTableModifierData(config, data);

  const handleSave: TableColumnModifierPopoverProps['onSubmit'] = (e) => {
    const api: any = data ? apiUpdate : apiCreate;
    api
      .mutateAsync({
        ...data,
        type: PRESET_TYPE,
        name: config?.columnModifierKey,
        value: e.extra,
      })
      .then((preset: any) => {
        applyPresetOnConfig(preset);
        notify.success('Layout updated successfully');
        e.onClose();
      });
  };

  return (
    <Styled.Wrapper
      className={classnames('AdvanceTableColumnModifier', className)}
      id={String(config?.columnModifierKey)}
      items={items}
      disableStorage
      onSubmit={handleSave}
      element={element}
    />
  );
};

AdvanceTableColumnModifier.displayName = 'AdvanceTableColumnModifier';
