import { FormProvider } from '@myapp/shared/components';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(FormProvider)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  ${(p) => p.theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

export const UsernameWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  width: 100%;

  ${(p) => p.theme.breakpoints.down('lg')} {
    flex-direction: column;

    > * {
      width: 100%;
      flex-direction: column;
    }
  }
`;

export const SubmitButton = styled(Button)`
  height: 100%;
  width: 100%;
  min-height: 3rem;
`;
export const UsernameStartWrapper = styled(Box)`
  > * {
    min-width: 40px;
  }
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
`;
export const UsernameEndWrapper = styled(Box)`
  width: auto;
  white-space: nowrap;
  display: flex;
  justify-content: flex-end;
`;
