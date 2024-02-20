import { BorderedCard } from '@myapp/shared/components';
import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(BorderedCard)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${(p) => p.theme.spacing(2)};
  padding: ${(p) => p.theme.spacing(2)};
`;

export const Title = styled('div')`
  font-size: 14px;
  font-weight: 600;
  line-height: 12px;
`;

export const CurrentEmailInput = styled(TextField)``;

export const PopoverInput = styled(TextField)`
  width: 240px;

  fieldset {
    border-width: 2px;
  }
`;

export const Start = styled(Box)`
  display: flex;
  gap: 4vw;
  align-items: center;
  min-width: 50%;

  ${(p) => p.theme.breakpoints.down('md')} {
    gap: ${(p) => p.theme.spacing(2)};
  }
`;

export const ChangeEmailButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  gap: ${(p) => p.theme.spacing(0.5)};

  ${(p) => p.theme.breakpoints.down('md')} {
    > span {
      display: none;
    }
  }
`;
