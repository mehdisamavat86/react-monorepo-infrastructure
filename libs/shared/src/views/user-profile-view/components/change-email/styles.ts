import { FormDialog } from '@myapp/shared/components';
import { TextField as BaseTextField, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)``;

export const FormWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: ${(p) => p.theme.spacing(1.5)};
`;

export const TextField = styled(BaseTextField)`
  &.isPending {
    .MuiFormLabel-root {
      color: ${(p) => p.theme.palette.primary.main};
    }

    input {
      color: ${(p) => p.theme.palette.primary.main};
    }

    .MuiInputBase-root {
      background: ${(p) => p.theme.palette.primary.lighter};
    }

    .MuiFormLabel-root {
      color: ${(p) => p.theme.palette.primary.main};
    }
  }
`;

export const Dialog = styled(FormDialog)``;
