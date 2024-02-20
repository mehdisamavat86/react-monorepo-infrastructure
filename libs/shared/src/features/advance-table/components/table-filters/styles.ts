import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  gap: 4px;
`;

export const Items = styled(Box)`
  display: flex;
  gap: 4px;
  width: 100%;
  flex-wrap: wrap;
  flex-grow: 1;
`;
