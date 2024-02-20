import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  width: 100%;
`;

export const Title = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;

  > svg {
    font-size: 16px;
  }
`;

export const CheckPassword = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  list-style-type: none;
  width: 100%;
  padding: 8px 12px;

  svg {
    display: none;
  }

  > .success {
    color: ${(p) => p.theme.palette.success.main};
    width: 100%;

    > svg {
      display: inline;
    }
  }
`;
