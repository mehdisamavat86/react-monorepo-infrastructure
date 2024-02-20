import { Box, Checkbox, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  &.rounded-header {
    thead {
      th {
        :first-of-type {
          border-start-start-radius: ${(p) => p.theme.shape.borderRadius}px;
        }

        :last-of-type {
          border-start-end-radius: ${(p) => p.theme.shape.borderRadius}px;
        }
      }
    }
  }
`;

export const ActionsWrapper = styled(Box)`
  background: inherit;
`;

export const CheckboxCell = styled(TableCell)`
  padding: ${(p) => p.theme.spacing(1)};
  text-align: center;
  border-right: none !important;
`;

export const SelectBox = styled(Checkbox)`
  padding: 0;
`;
