import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TopBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 14px;

  @media (max-width: ${(p) => p.theme.breakpoints.values.md + 150}px) {
    flex-direction: column;
  }
`;
