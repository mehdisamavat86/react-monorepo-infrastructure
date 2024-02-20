import { useGetSinglePresetApi } from '@myapp/shared/api';
import { SortableListItem } from '@myapp/shared/components';
import { DURATION_MS } from '@myapp/shared/utils';
import { ADVANCE_TABLE_COLUMN_MODIFIER_PRESET_TYPE as PRESET_TYPE } from '../constant';
import { useAdvanceTableContext } from '../context';
import { AdvanceTaColumnModifierPreset } from '../types';
import { applyTableColumnModifierPresetOnConfig } from '../utils';

export function useAdvanceTableColumnModifierData() {
  const { config, setConfig } = useAdvanceTableContext();
  const applyPresetOnConfig = (data: AdvanceTaColumnModifierPreset) =>
    setConfig(applyTableColumnModifierPresetOnConfig(config, data));
  const api = useGetSinglePresetApi<SortableListItem[]>(
    {
      type: PRESET_TYPE,
      name: config?.columnModifierKey,
    },
    true,
    {
      cacheTime: DURATION_MS.hours(1),
      staleTime: DURATION_MS.hours(1),
    }
  );

  return { data: api.data, config, applyPresetOnConfig };
}
