import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormProvider from '../hook-form/form-provider';

export const Wrapper = styled(FormProvider)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(2)};
`;

export const Actions = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: ${(p) => p.theme.spacing(0.5)};
  padding-top: ${(p) => p.theme.spacing(1)};
  border-top: 1px solid transparent;
`;
