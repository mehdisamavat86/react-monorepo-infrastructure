import { useTableSearchItemStore } from '@myapp/shared/store/table-search-item';
import { useLocation, useNavigation } from 'react-router-dom';
import { classnames } from '@myapp/shared/utils';
import { useTheme } from '@mui/material/styles';
import { AdvanceTableColumn } from '../../types';
import * as Styled from './styles';
import * as SX from './sx';
import type { TableRowProps as Props } from './types';

export const TableRow = ({
  className,
  item,
  index,
  selected,
  config,
  columns,
  onSelect,
  onRowClick,
  checkboxEnabled,
  ...other
}: Props) => {
  const theme = useTheme();

  const { searchedItem } = useTableSearchItemStore();

  const isSelected = searchedItem.domain === item.domain;

  const render = (col: AdvanceTableColumn) =>
    (col.render
      ? col.render(item[col.id as string], item, index)
      : item[col.id as string]) ?? '-';

  const selectCheckBox = (
    <Styled.SelectBox
      checked={selected}
      onChange={() => {
        onSelect?.(index, item[config.rowKey ?? 'id'], !selected);
      }}
      disabled={!selected && !checkboxEnabled}
    />
  );

  return (
    <Styled.Wrapper
      className={classnames('TableRow', className)}
      {...other}
      onClick={onRowClick}
      sx={SX.row(isSelected)}
    >
      {config.rowSelectable && (
        <Styled.CheckboxCell
          className="TableRowSelectCell"
          onClick={(e) => e.stopPropagation()}
        >
          {selectCheckBox}
        </Styled.CheckboxCell>
      )}

      {columns.map((col) => (
        <Styled.Cell
          key={String(col.key ?? col.id)}
          data-id={col.key ?? col.id}
          sx={{
            ...theme.typography.body2,
            overflow: 'hidden',
            whiteSpace: 'pre-wrap',
            width: col.width ?? col.minWidth ?? '100%',
            maxWidth: col.width ?? col.minWidth,
            minWidth: col.minWidth,
            textAlign: col.align,
            boxShadow: col.boxShadow,
            ...config.cellSx,
          }}
        >
          {render(col)}
        </Styled.Cell>
      ))}
    </Styled.Wrapper>
  );
};

TableRow.displayName = 'TableRow';
