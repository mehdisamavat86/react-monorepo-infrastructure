import { BorderedCard } from '@myapp/shared/components';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  min-width: 376px;
`;

export const Card = styled(BorderedCard)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing(3)};
`;

export const UploadWrapper = styled('div')`
  justify-self: flex-end;
`;
