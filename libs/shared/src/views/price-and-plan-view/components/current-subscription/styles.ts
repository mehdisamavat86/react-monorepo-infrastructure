import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(p) => p.theme.spacing(1)};
`;

export const Content = styled('span')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
`;

export const Description = styled(Typography)`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
`;
