import {
  FormControl as FormControlBase,
  InputLabel as InputLabelBase,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { DatePicker as BaseDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const Wrapper = styled(LocalizationProvider)``;

export const Content = styled('div')`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FormControl = styled(FormControlBase)`
  width: 100%;
`;

export const InputLabel = styled(InputLabelBase)`
  font-weight: ${(p) => p.theme.typography.fontWeightRegular};
  background-color: ${(p) => p.theme.palette.background.paper};
  padding: 0 ${(p) => p.theme.spacing(0.5)};
  &.MuiInputLabel-shrink {
    font-weight: ${(p) => p.theme.typography.fontWeightRegular};
  }
`;

export const DatePicker = styled(BaseDatePicker)`
  background-color: ${(p) => p.theme.palette.common.white};
  height: ${(p) => p.theme.spacing(4)};
  & > div > label {
    line-height: 1.5;
  }

  & > div:hover > .MuiOutlinedInput-notchedOutline {
    border-color: ${(p) => p.theme.palette.primary[400]};
  }

  & > div.Mui-focused > .MuiOutlinedInput-notchedOutline {
    border-color: ${(p) => p.theme.palette.primary[400]};
  }
`;
