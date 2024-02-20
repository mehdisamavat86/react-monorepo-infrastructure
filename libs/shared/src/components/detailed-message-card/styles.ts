import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CompactLayout } from '@myapp/shared/layouts';

export const Wrapper = styled(CompactLayout)``;

export const Text = styled(Typography)`
  display: inline-block;
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  min-height: 20vh;
`;
