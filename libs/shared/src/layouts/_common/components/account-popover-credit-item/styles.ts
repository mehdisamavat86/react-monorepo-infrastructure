import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)``;

export const CreditValueWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${(p) => p.theme.spacing(0.5)};
`;

export const CreditValueNumberWrapper = styled(Box)`
  display: flex;
  align-items: center;
  line-height: 1;
  gap: 2px;
`;
