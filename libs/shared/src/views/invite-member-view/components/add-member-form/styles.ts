import { Form } from '@myapp/shared/components';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Form)`
  display: flex;
  gap: ${(p) => p.theme.spacing(2)};
  flex-direction: column;
`;

export const Content = styled(Box)`
  display: flex;
  gap: ${(p) => p.theme.spacing(2)};
  flex-direction: column;
`;

export const AddMemberRow = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(2)};
`;
