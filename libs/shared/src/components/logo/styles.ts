import { styled } from '@mui/material/styles';
import { Link as BaseLink } from 'react-router-dom';

export const Img = styled('img')`
  height: ${(p) => p.theme.spacing(2.5)};
`;

export const Link = styled(BaseLink)``;
