import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${(p) => p.theme.spacing(1)};
`;

export const ToggleButton = styled(Button)`
  padding: 0;
`;

export const TextMore = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(1)};
  font-size: ${(p) => p.theme.typography.caption.fontSize};
`;

export const TextWrapper = styled(Typography)`
  font-weight: ${(p) => p.theme.typography.fontWeightSemiBold};
`;
