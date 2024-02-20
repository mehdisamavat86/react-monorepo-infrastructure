import { Select } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Select)`
  &.Mui-disabled {
    .MuiSelect-icon {
      display: none;
    }

    * {
      cursor: not-allowed;
    }
  }
`;

export const Placeholder = styled('span')`
  color: ${(p) => p.theme.palette.text.disabled};
`;
