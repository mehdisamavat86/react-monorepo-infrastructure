import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.spacing(0.5)};
`;

export const Input = styled(TextField)`
  flex: 1;
  display: flex;
  background-color: ${(p) => p.theme.palette.common.white};

  .MuiInputBase-root {
    padding-left: ${(p) => p.theme.spacing(0.5)};
    & > input {
      padding: ${(p) => p.theme.spacing(1)};
      font-size: ${(p) => p.theme.typography.caption.fontSize};
      line-height: 1;
    }
  }
  .MuiInputBase-root:hover > fieldset {
    border-color: ${(p) => p.theme.palette.primary.main};
  }

  .MuiInputBase-root:focus > fieldset {
    border-color: ${(p) => p.theme.palette.primary.main};
  }

  svg {
    color: ${(p) => p.theme.palette.grey[500]};
    font-size: ${(p) => p.theme.typography.pxToRem(12)};
    font-weight: ${(p) => p.theme.typography.fontWeightRegular};
  }
`;

export const InputBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(p) => p.theme.spacing(1)};
`;

export const MessageBox = styled(Box)`
  display: flex;
  align-self: flex-start;
`;

export const ErrorMessage = styled(Typography)`
  font-size: ${(p) => p.theme.typography.pxToRem(10)};
`;
