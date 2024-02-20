import { classnames } from '@myapp/shared/utils';
import { useAdvanceTableContext } from '../../context';
import { AdvanceTableColumn } from '../../types';
import * as Styled from './styles';
import * as SX from './sx';
import type { TableStickyRowProps as Props } from './types';

export const TableStickyRow = ({
  className,
  item,
  index,
  selected,
  config,
  columns,
  checkboxEnabled,
  onSelect,
  onRowClick,
  ...other
}: Props) => {
  const { stickyCollapsed } = useAdvanceTableContext();

  const render = (col: AdvanceTableColumn) =>
    (col.render
      ? col.render(item[col.id as string], item, index)
      : item[col.id as string]) ?? '-';

  const selectCheckBox = <Styled.SelectBox checked={selected} />;

  if (stickyCollapsed) return null;

  return (
    <Styled.Wrapper
      className={classnames('TableStickyRow', className)}
      {...other}
      onClick={onRowClick}
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
            ...SX.cell,
            ...config.cellSx,
            width: col.width ?? col.minWidth ?? '100%',
            maxWidth: col.width ?? col.minWidth,
            minWidth: col.minWidth,
            textAlign: col.align,
            boxShadow: col.boxShadow,
          }}
        >
          {render(col)}
        </Styled.Cell>
      ))}
    </Styled.Wrapper>
  );
};

TableStickyRow.displayName = 'TableStickyRow';
