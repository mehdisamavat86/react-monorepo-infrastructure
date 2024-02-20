import { FormDialog } from '@myapp/shared/components';
import { LoadingButton } from '@mui/lab';
import { TextField as BaseTextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(FormDialog)`
  .MuiDialog-paper {
    min-width: 536px;
  }

  ${(p) => p.theme.breakpoints.down('sm')} {
    .MuiDialog-paper {
      min-width: 200px;
    }
  }
`;

export const Title = styled('div')`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;

export const DeleteButton = styled(LoadingButton)`
  svg {
    display: none;
  }

  ${(p) => p.theme.breakpoints.down('sm')} {
    svg {
      display: initial;
    }

    span {
      display: none;
    }
  }
`;

export const List = styled('ul')`
  margin: 0;
`;

export const TextField = styled(BaseTextField)`
  min-width: 293px;
`;
