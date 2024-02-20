import { TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  CheckboxCell as CheckboxCellBase,
  SelectBox as SelectBoxBase,
} from '../../styles';

export const Wrapper = styled(TableRow)`
  background-color: ${(p) =>
    p.theme.palette.mode === 'dark'
      ? p.theme.palette.background.paper
      : p.theme.palette.primary.lighter};
  position: relative;

  ::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px dashed
      ${(p) =>
        p.theme.palette.mode === 'dark'
          ? p.theme.palette.common.white
          : p.theme.palette.primary.main};
  }

  &.Clickable {
    cursor: pointer;
  }
`;

export const CheckboxCell = styled(CheckboxCellBase)``;

export const Cell = styled(TableCell)`
  z-index: 10;
  position: relative;
`;

export const SelectBox = styled(SelectBoxBase)`
  cursor: not-allowed;
`;
