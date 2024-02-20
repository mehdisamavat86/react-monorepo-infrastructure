import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)`
  margin: 0 7vw;
  background: rgb(112, 147, 245);
  background: url('/assets/images/contact-us.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  border-radius: ${(p) => p.theme.spacing(1.2)};
  margin-top: ${(p) => p.theme.spacing(5)};
  padding-top: ${(p) => p.theme.spacing(3)};
  color: ${(p) => p.theme.palette.common.white};
`;
