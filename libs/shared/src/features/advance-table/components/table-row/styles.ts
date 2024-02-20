import { TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  CheckboxCell as CheckboxCellBase,
  SelectBox as SelectBoxBase,
} from '../../styles';

export const Wrapper = styled(TableRow)`
  &.Clickable {
    cursor: pointer;
  }
  &.isSelected {
    display: none;
  }
  td {
    background: transparent !important;
  }
  .MuiTableCell-root {
    background: transparent !important;
  }
`;

export const Cell = styled(TableCell)`
  background: transparent;
`;

export const SelectBox = styled(SelectBoxBase)``;

export const CheckboxCell = styled(CheckboxCellBase)``;
