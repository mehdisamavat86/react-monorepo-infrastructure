import { SxStyle } from '@myapp/shared/theme';

export const tableRowSelectCellInnerBox: SxStyle = {
  height: (p) => p.spacing(5),
  width: (p) => p.spacing(5),
};

export const tableNoDataCell: SxStyle = {
  justifyContent: 'center',
  background: (p) => p.palette.background.default,
  borderRadius: (p) => p.spacing(1),
};

export const tableHeaderRow: SxStyle = {
  zIndex: 1000,
};
