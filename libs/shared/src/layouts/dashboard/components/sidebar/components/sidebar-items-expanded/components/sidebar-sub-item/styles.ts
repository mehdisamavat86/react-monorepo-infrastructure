import { Icon as IconBase } from '@myapp/shared/components';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  padding: ${(p) => p.theme.spacing(1)};
  gap: ${(p) => p.theme.spacing(0.5)};
  text-decoration: none;
  border-radius: ${(p) => p.theme.spacing(0.5)};

  &:hover {
    background-color: ${(p) => p.theme.palette.primary[50]};
    & > span,
    svg {
      color: ${(p) => p.theme.palette.primary.main};
    }
  }
`;

export const Title = styled(Typography)`
  &.active {
    color: ${(p) => p.theme.palette.primary.main};
    font-weight: ${(p) => p.theme.typography.fontWeightBold};
  }
`;

export const Icon = styled(IconBase)`
  &.active {
    color: ${(p) => p.theme.palette.primary.main};
  }
`;
