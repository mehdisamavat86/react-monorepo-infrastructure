import { Form as BaseForm, CardBox } from '@myapp/shared/components';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(CardBox)`
  margin: auto;
  padding: ${(p) => p.theme.spacing(6)};
`;

export const Form = styled(BaseForm)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(2.5)};
`;
