import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(1)};
`;

export const CardTile = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${(p) => p.theme.spacing(1)};
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
`;

export const CardIcon = styled('image')`
  background: url('/assets/images/credit-card-icon.svg');
  width: 35px;
  height: 24px;
`;

export const CardNumber = styled('div')`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;
