import { BorderedCard, Form } from '@myapp/shared/components';
import { Button as BaseButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(BorderedCard)`
  padding: 0;
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled(BaseButton)`
  align-self: flex-start;
`;
