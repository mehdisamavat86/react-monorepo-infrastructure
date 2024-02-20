import { BorderedCard } from '@myapp/shared/components';
import { TextField as BaseTextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(BorderedCard)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  gap: 14px;
`;

export const TextField = styled(BaseTextField)`
  min-width: 300px;
  border-radius: ${(p) => p.theme.shape.borderRadius}px;

  ${(p) => p.theme.breakpoints.down('sm')} {
    min-width: auto;
    flex: 1;
  }
`;
