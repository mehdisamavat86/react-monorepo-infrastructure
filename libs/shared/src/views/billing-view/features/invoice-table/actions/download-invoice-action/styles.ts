import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  color: ${(p) => p.theme.palette.primary.main};
  display: flex;
  align-items: center;
  gap: 2px;
`;
