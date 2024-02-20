import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(1)};
`;

export const TextMore = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(1)};
`;

export const ListWrapper = styled(Box)`
  display: flex;
  gap: ${(p) => p.theme.spacing(0.5)};
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
`;

export const ToggleButton = styled(Button)`
  font-weight: ${(p) => p.theme.typography.fontWeightRegular};
  background-color: ${(p) => p.theme.palette.primary[100]};
  border: 1px solid transparent;
  box-shadow: none !important;

  &:hover {
    background-color: ${(p) => p.theme.palette.primary[100]};
    border: 1px solid transparent;
  }

  &.Less {
    background-color: ${(p) => p.theme.palette.common.white};
    border: 1px solid ${(p) => p.theme.palette.primary[100]};
  }
`;
