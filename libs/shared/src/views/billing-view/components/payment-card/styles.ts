import { BorderedCard } from '@myapp/shared/components';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(BorderedCard)`
  padding: 0;
`;

export const Content = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
