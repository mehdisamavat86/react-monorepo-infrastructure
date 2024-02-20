import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)``;
export const AvatarImage = styled('img')`
  @media screen and (max-width: 1650px) {
    width: ${(p) => p.theme.spacing(10)};
  }
  width: ${(p) => p.theme.spacing(13)};
  background-color: ${(p) => p.theme.palette.primary.light};
  border-radius: 50%;
`;
