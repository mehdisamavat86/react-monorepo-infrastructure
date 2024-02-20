import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  color: ${(p) => p.theme.palette.common.black};
  font-weight: 400;
  font-size: ${(p) => p.theme.typography.button};
  font-weight: ${(p) => p.theme.typography.fontWeightBold};
  text-decoration: none;
  background: ${(p) => p.theme.palette.grey[200]};
`;
