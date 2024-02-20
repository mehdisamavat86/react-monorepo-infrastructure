import type { SxStyle } from '@myapp/shared/theme';

export const root: SxStyle = {};

export const chip: SxStyle = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: (p) => p.palette.primary.main,
  background: (p) => p.palette.primary.lighter,
  borderRadius: (p) => p.spacing(1.5),
  color: (p) => p.palette.primary.main,

  mr: (p) => p.spacing(1),
};

export const deleteIcon: SxStyle = {
  color: (p) => p.palette.primary.main,
};

export const optionItem: SxStyle = {
  px: (p) => p.spacing(1.5),
  py: (p) => p.spacing(1),
  cursor: 'pointer',
  borderRadius: (p) => p.spacing(1),
  ':hover': {
    background: (p) => p.palette.primary.superlight,
    color: (p) => p.palette.primary.main,
  },
};
