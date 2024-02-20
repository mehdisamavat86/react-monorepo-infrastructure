import { Icon as BaseIcon } from '@myapp/shared/components';
import { FullScreenBox } from '@myapp/shared/components/full-screen-box';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(FullScreenBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(p) => p.theme.spacing(2)};
`;

export const Content = styled(Box)`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  overflow: hidden;
  max-width: 800px;
  border: 1px solid ${(p) => p.theme.palette.divider};
  border-radius: ${(p) => p.theme.shape.borderRadius}px;
`;

export const Img = styled('img')`
  width: max(300px, 25vw);
  height: 100%;
  background-repeat: no-repeat;
  padding-right: 7vw;

  ${(p) => p.theme.breakpoints.down('sm')} {
    display: none;
  }
`;

export const Icon = styled(BaseIcon)`
  ${(p) => p.theme.breakpoints.down('md')} {
    width: 67px;
    height: 67px;
  }
`;

export const Information = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 12vh 24px;
  text-align: center;

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  button {
    min-width: 145px;
  }
`;
