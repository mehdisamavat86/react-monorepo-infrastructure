import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BorderedCard = styled(Card)`
  padding: 24px;
  border: 1px solid
    ${(p) =>
      p.theme.palette.mode === 'dark'
        ? p.theme.palette.grey[700]
        : p.theme.palette.grey[300]};
  width: 100%;
`;
