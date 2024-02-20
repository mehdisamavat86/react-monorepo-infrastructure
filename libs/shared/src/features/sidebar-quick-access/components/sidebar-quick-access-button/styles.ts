import { RouterLinkButton } from '@myapp/shared/router';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(RouterLinkButton)`
  width: calc(100% - ${(p) => p.theme.spacing(3)});
  gap: ${(p) => p.theme.spacing(1)};

  &.mini {
    width: 80px;
    border-radius: 0;

    :not(:last-child) {
      border-bottom: 1px solid ${(p) => p.theme.palette.divider};
    }
  }
`;

export const TitleBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing(1)};
  padding: ${(p) => p.theme.spacing(0.5)} 0;
  text-align: center;
`;

export const Title = styled('span')``;
