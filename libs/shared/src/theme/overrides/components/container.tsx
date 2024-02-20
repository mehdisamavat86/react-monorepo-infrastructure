import { Theme } from '@mui/material/styles';

export default function Accordion(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          '&': {
            padding: '0',
          },
        },
      },
    },
  };
}
