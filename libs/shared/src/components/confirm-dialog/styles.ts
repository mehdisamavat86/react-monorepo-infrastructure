import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')``;

export const Content = styled('div')`
  overflow-y: auto;
  max-height: 80vh;
  height: fit-content;

  .MuiDialogContent-root {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const SubTitle = styled(Typography)`
  font-size: 14px;
`;
