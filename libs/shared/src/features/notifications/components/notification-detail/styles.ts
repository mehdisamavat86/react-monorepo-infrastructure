import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)`
  flex-direction: row;
  gap: ${(p) => p.theme.spacing(1)};
  padding-bottom: ${(p) => p.theme.spacing(1.25)};
  padding-top: ${(p) => p.theme.spacing(1.25)};
  border-bottom: 1px dashed
    ${(p) =>
      p.theme.palette.mode !== 'dark'
        ? p.theme.palette.grey[300]
        : p.theme.palette.grey[500]};
  position: relative;
  align-items: flex-start;
`;

export const NotificationStatus = styled(Box)`
  position: absolute;
  top: ${(p) => p.theme.spacing(2)};
  right: 0;
  min-width: ${(p) => p.theme.spacing(1)};
  min-height: ${(p) => p.theme.spacing(1)};
  border-radius: 50%;
  background-color: ${(p) =>
    p.theme.palette.mode !== 'dark'
      ? p.theme.palette.info.main
      : p.theme.palette.success.main};
  flex: 0.05;
`;

export const Content = styled(Stack)`
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(1)};
  align-items: flex-start;
  cursor: pointer;
  flex: 0.95;
`;

export const Text = styled(Stack)`
  gap: ${(p) => p.theme.spacing(1.5)};
  flex-direction: column;
  white-space: pre-line;
  display: inline-block;
`;

export const Date = styled(Typography)`
  color: ${(p) => p.theme.palette.grey[500]};
`;
