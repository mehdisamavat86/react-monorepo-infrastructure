import { bgBlur } from '@myapp/shared/theme';
import { Box } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { MenuPopoverArrowValue } from './types';

export const Title = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${(p) => p.theme.spacing(1.2)};
  padding: ${(p) => p.theme.spacing(1.2)};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  border-bottom: 1px dashed transparent;
`;

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  /* padding: ${(p) => p.theme.spacing(1.5)}px; */
  width: 100%;
`;

export const Main = styled('div')`
  padding: ${(p) => p.theme.spacing(1.5)};
  max-height: 45vh;
  overflow-y: auto;
`;

export const Actions = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: ${(p) => p.theme.spacing(1.2)};
  border-top: 1px solid transparent;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled('span')<{ arrow: MenuPopoverArrowValue }>(
  ({ arrow, theme }) => {
    const SIZE = 14;

    const POSITION = -(SIZE / 2) + 0.5;

    const topStyle = {
      top: POSITION,
      transform: 'rotate(135deg)',
    };

    const bottomStyle = {
      bottom: POSITION,
      transform: 'rotate(-45deg)',
    };

    const leftStyle = {
      left: POSITION,
      transform: 'rotate(45deg)',
    };

    const rightStyle = {
      right: POSITION,
      transform: 'rotate(-135deg)',
    };

    return {
      width: SIZE,
      height: SIZE,
      position: 'absolute',
      borderBottomLeftRadius: SIZE / 4,
      clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
      border: `solid 1px ${alpha(
        theme.palette.mode === 'light'
          ? theme.palette.grey[500]
          : theme.palette.common.black,
        0.12
      )}`,
      ...bgBlur({
        color: theme.palette.background.paper,
      }),
      // Top
      ...(arrow === 'top-left' && { ...topStyle, left: 20 }),
      ...(arrow === 'top-center' && {
        ...topStyle,
        left: 0,
        right: 0,
        margin: 'auto',
      }),
      ...(arrow === 'top-right' && { ...topStyle, right: 20 }),
      // Bottom
      ...(arrow === 'bottom-left' && { ...bottomStyle, left: 20 }),
      ...(arrow === 'bottom-center' && {
        ...bottomStyle,
        left: 0,
        right: 0,
        margin: 'auto',
      }),
      ...(arrow === 'bottom-right' && { ...bottomStyle, right: 20 }),
      // Left
      ...(arrow === 'left-top' && { ...leftStyle, top: 20 }),
      ...(arrow === 'left-center' && {
        ...leftStyle,
        top: 0,
        bottom: 0,
        margin: 'auto',
      }),
      ...(arrow === 'left-bottom' && { ...leftStyle, bottom: 20 }),
      // Right
      ...(arrow === 'right-top' && { ...rightStyle, top: 20 }),
      ...(arrow === 'right-center' && {
        ...rightStyle,
        top: 0,
        bottom: 0,
        margin: 'auto',
      }),
      ...(arrow === 'right-bottom' && { ...rightStyle, bottom: 20 }),
    };
  }
);
