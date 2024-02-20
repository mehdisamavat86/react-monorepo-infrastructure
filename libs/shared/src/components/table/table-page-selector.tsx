import { TablePaginationProps } from '@mui/material';
import { range } from 'lodash-es';
import { memo } from 'react';
import { DropDown, DropDownOption } from '../drop-down';

type Props = {
  count: number;
  current: number;
  onChange: TablePaginationProps['onPageChange'];
};

export const TablePageSelector = memo(({ count, current, onChange }: Props) => {
  const options: DropDownOption[] = range(0, count > 100 ? 100 : count).map(
    (x) => ({
      key: String(x),
      value: x,
      label: x + 1,
    })
  );

  return (
    <DropDown
      options={options}
      value={current}
      sx={{ height: 30, minWidth: 60 }}
      onChange={(e) => onChange({} as any, e)}
    />
  );
});
