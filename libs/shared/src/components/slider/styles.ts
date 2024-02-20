import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CardBox } from '../card-box';
import Carousel from '../carousel';

export const Wrapper = styled(CardBox)`
  width: 100%;
`;

export const Actions = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: ${(p) => p.theme.spacing(0.5)};
  justify-content: flex-end;

  > .MuiIconButton-root {
    padding: ${(p) => p.theme.spacing(0, 0.5)};
  }
`;

export const Slider = styled(Carousel)`
  .slick-track {
    display: flex;
    gap: ${(p) => p.theme.spacing(3)};
  }

  .slick-dots {
    display: none !important;
  }
`;
