import { ConfirmDialog } from '@myapp/shared/components';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(ConfirmDialog)``;

export const CardInfo = styled(Box)`
  border: 1px solid ${(p) => p.theme.palette.divider};
  padding: ${(p) => p.theme.spacing(2)};
  border-radius: ${(p) => p.theme.shape.borderRadius}px;
`;
