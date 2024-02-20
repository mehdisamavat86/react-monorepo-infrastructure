import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Box)``;

export const UpdradeLink = styled(Link)`
  text-decoration: none;
  border: solid 1px ${(p) => p.theme.palette.primary[200]};
  border-radius: ${(p) => p.theme.spacing(1)};
  padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(1.5)};
  line-height: 1;
  background-color: ${(p) => p.theme.palette.common.white};
  color: ${(p) => p.theme.palette.common.black};

  &:hover {
    border-color: ${(p) => p.theme.palette.grey[400]};
    -moz-box-shadow: 0 0 0 4px ${(p) => p.theme.palette.grey[100]};
    -webkit-box-shadow: 0 0 0 4px ${(p) => p.theme.palette.grey[100]};
    box-shadow: 0 0 0 4px ${(p) => p.theme.palette.grey[200]};
  }
`;
