import {
  FormControl,
  InputLabel as InputLabelBase,
  Select as SelectBase,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(FormControl)`
  width: 100%;
`;

export const Select = styled(SelectBase<string>)`
  height: ${(p) => p.theme.spacing(4)};

  &:hover > .MuiOutlinedInput-notchedOutline {
    border-color: ${(p) => p.theme.palette.primary[400]};
  }

  &.Mui-focused > .MuiOutlinedInput-notchedOutline {
    border-color: ${(p) => p.theme.palette.primary[400]};
  }
`;

export const InputLabel = styled(InputLabelBase)`
  font-weight: ${(p) => p.theme.typography.fontWeightRegular};
  background-color: ${(p) => p.theme.palette.background.paper};
  padding: 0 ${(p) => p.theme.spacing(0.5)};
  &.MuiInputLabel-shrink {
    font-weight: ${(p) => p.theme.typography.fontWeightRegular};
  }
`;
