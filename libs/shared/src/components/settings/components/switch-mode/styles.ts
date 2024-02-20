import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(1)};
  border: 2px solid ${(p) => p.theme.palette.divider};
  border-radius: ${(p) => p.theme.spacing(0.5)};
  padding: ${(p) => p.theme.spacing(0.5)} ${(p) => p.theme.spacing(1)};

  .MuiButtonBase-root {
    height: 100% !important;
    padding: ${(p) => p.theme.spacing(0.5)};
  }
`;
