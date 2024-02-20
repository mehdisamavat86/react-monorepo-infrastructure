import { Icon as IconBase } from '@myapp/shared/components';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  align-items: center;
  display: flex;
  cursor: pointer;
  padding: 0;
  height: 100%;
`;

export const Icon = styled(IconBase)`
  &:hover {
    color: ${(p) => p.theme.palette.primary.main};
  }
`;
