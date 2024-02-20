import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) =>
    p.theme.palette.mode === 'light'
      ? p.theme.palette.grey[300]
      : p.theme.palette.grey[800]};
  border-radius: ${(p) => p.theme.spacing(1)};
  border: solid 1px
    ${(p) =>
      p.theme.palette.mode === 'light' ? 'none' : p.theme.palette.grey[700]};
  font-size: ${(p) => p.theme.typography.button.fontSize};
  font-weight: ${(p) => p.theme.typography.button.fontWeight};
  cursor: pointer;
  height: 28px;
`;
