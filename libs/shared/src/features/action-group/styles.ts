import { CustomPopover } from '@myapp/shared/components';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(CustomPopover)``;

export const Content = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(1)};
  width: max-content;
`;
