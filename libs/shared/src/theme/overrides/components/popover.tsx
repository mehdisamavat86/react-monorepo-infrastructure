import { listClasses } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { paper } from '../../css';

export default function Popover(theme: Theme) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          ...paper({ theme, dropdown: true }),
          border: `1px solid ${theme.palette.grey[400]}`,
          [`& .${listClasses.root}`]: {
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
      },
    },
  };
}
