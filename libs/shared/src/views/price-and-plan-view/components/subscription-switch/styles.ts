import { Switch as BaseSwitch, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(p) => p.theme.spacing(1)};
  padding: ${(p) => p.theme.spacing(1, 3)};
  min-width: ${(p) => p.theme.breakpoints.values.xs};
  border-radius: ${(p) => p.theme.spacing(3)};
`;

export const SwitchTitle = styled('div')<{ checked?: boolean }>`
  color: ${(p) =>
    p.checked ? p.theme.palette.text.primary : p.theme.palette.grey[500]};
`;

export const Switch = styled(BaseSwitch)`
  .MuiSwitch-track {
    background-color: ${(p) => p.theme.palette.primary.main};
  }
`;
