import { alpha, styled } from '@mui/material/styles';
import * as AccountPopoverStyled from '../../styles';

export const Wrapper = styled(AccountPopoverStyled.AccountPopoverBorderedBox)`
  cursor: pointer;
  &.expire,
  &.outOfCredit {
    background-color: ${(p) => alpha(p.theme.palette.error.main, 0.1)};
    border: none;
    :hover {
      background-color: ${(p) => p.theme.palette.error.dark};
      span {
        color: ${(p) => p.theme.palette.primary.contrastText};
      }
    }
  }

  :hover {
    background-color: ${(p) => p.theme.palette.primary.main};
    & > div > div > span {
      color: ${(p) => p.theme.palette.primary.contrastText};
    }
  }
`;
