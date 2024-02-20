import { Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)`
  padding-top: ${(p) => p.theme.spacing(12)};
`;

export const CallbackBtn = styled(Button)`
  color: ${(p) => p.theme.palette.common.black};
  background-color: ${(p) => p.theme.palette.common.white};
  border: 1px solid ${(p) => p.theme.palette.grey[400]};
  padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(2)};
  margin-top: ${(p) => p.theme.spacing(5)};
  font-size: ${(p) => p.theme.typography.subtitle1};
`;

export const Card = styled(Stack)`
  position: relative;
  background: url('/assets/images/elephant-bg.png');
  background-color: ${(p) => p.theme.palette.common.white};
  border-radius: ${(p) => p.theme.spacing(1.2)};
  width: 25vw;
  height: 400px;
`;

export const CardBottom = styled(Stack)`
  position: absolute;
  background-repeat: space;
  bottom: ${(p) => p.theme.spacing(-1.5)};
  width: 100%;
  right: 50%;
`;

export const Image = styled('img')`
  width: 150px;
`;
