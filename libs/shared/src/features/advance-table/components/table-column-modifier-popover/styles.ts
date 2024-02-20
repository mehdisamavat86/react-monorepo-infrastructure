import { SortableListPopover } from '@myapp/shared/components/sortable-list-popover';
import { Button as BaseButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(SortableListPopover)``;

export const Title = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(p) => p.theme.spacing(1)};
  padding: ${(p) => p.theme.spacing(0.5)};
`;

export const Button = styled(BaseButton)`
  min-width: ${(p) => p.theme.spacing(4)};
  min-height: ${(p) => p.theme.spacing(4)};
  &.open {
    background: ${(p) => p.theme.palette.primary.main};
    color: ${(p) => p.theme.palette.common.white};
  }
`;
