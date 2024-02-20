import type { AdvanceTableConfig } from '@myapp/shared/features';
import type { SxStyle } from '@myapp/shared/theme';
import { renderElement } from '@myapp/shared/utils';
import { TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EmptyContent } from '../empty-content';
import * as SX from './sx';

type Props = {
  sx?: SxStyle;
  config?: AdvanceTableConfig['emptyProps'];
  isError: boolean;
};

export type WithTableNoDataProps = {
  defaultRender: any;
  isError: boolean;
};

export const Cell = styled(TableCell)`
  border-bottom: none !important;
`;

export default function TableNoData({ sx, config, isError }: Props) {
  const defaultProps = typeof config === 'object' ? config : {};

  const defaultRender = (
    <EmptyContent
      filled
      title="No Data"
      sx={{
        py: 10,
        ...sx,
      }}
      {...defaultProps}
    />
  );

  return (
    <TableRow>
      <Cell colSpan={12} sx={SX.tableNoDataCell}>
        {config
          ? renderElement(config, { defaultRender, isError }, defaultRender)
          : defaultRender}
      </Cell>
    </TableRow>
  );
}
