import { createElement } from 'react';
import { AdvanceTaColumnModifierPreset, AdvanceTableConfig } from './types';

import * as Styled from './styles';

const ACTIONS_COL_ID = 'actions-column';

export function appendActionColumnToConfig(conf: AdvanceTableConfig) {
  const result = { ...conf };

  if (result.actions.length && result.columns.at(-1)?.id !== ACTIONS_COL_ID)
    result.columns.push({
      id: ACTIONS_COL_ID,
      label: '',
      ...conf.actionsConfig,
      render: (_, item, rowNumber) => (
        <Styled.ActionsWrapper
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 0.5,
            ...conf.actionsConfig?.sx,
          }}
        >
          {result.actions?.map((component) =>
            createElement(component, {
              key: (component as any).displayName,
              item,
              rowNumber,
            })
          )}
        </Styled.ActionsWrapper>
      ),
    });
  return result;
}

export function addExtraFilter(
  config: AdvanceTableConfig,
  filters: AdvanceTableConfig['extraFilters']
) {
  if (filters) config.extraFilters = { ...config.extraFilters, ...filters };

  return config;
}

export function applyTableColumnModifierPresetOnConfig(
  config: AdvanceTableConfig,
  data: AdvanceTaColumnModifierPreset
) {
  const result = { ...config };
  const modifiedCols = data?.value;

  result.columns
    ?.filter((x) => x.showInColumnModifier !== false)
    ?.forEach((col) => {
      col.order = modifiedCols?.findIndex((x) => x.id === col.id);
      col.hide = !modifiedCols?.[col.order]?.selected;
    });

  result?.columns?.sort((a, b) => (a.order || 0) - (b.order || 0));

  return result;
}
