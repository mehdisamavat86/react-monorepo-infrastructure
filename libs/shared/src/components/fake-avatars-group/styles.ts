import { AvatarGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(AvatarGroup)`
  justify-content: center;

  .MuiAvatar-root {
    border: none;
    padding: 0;
  }

  &.large {
    .MuiAvatar-root {
      width: 76px;
      height: 76px;
    }
  }
`;
