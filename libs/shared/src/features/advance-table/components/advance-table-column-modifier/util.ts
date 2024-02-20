import { Nil, ParsedPreset } from '@myapp/shared/definition';
import { AdvanceTableConfig } from '../../types';
import { TableColumnModifier } from '../table-column-modifier-popover';

function obtainTableModifierDataFromConfig(config: AdvanceTableConfig) {
  return config?.columns
    .filter((x) => x.showInColumnModifier !== false)
    .map((x) => ({
      id: String(x.key ?? x.id),
      title: x.label,
      selected: true,
    }));
}

export function obtainTableModifierData(
  config: AdvanceTableConfig,
  preset?: Nil<ParsedPreset<TableColumnModifier[]>>
) {
  if (!preset) return obtainTableModifierDataFromConfig(config);
  return preset.value;
}
