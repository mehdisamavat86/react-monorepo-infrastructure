import { Icon, IconButton, useCarousel } from '@myapp/shared/components';
import { useWindowDimensions } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { Breakpoint } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { merge } from 'lodash-es';
import { memo } from 'react';
import { ResponsiveObject } from 'react-slick';
import * as Styled from './styles';
import * as SX from './sx';
import type { SliderProps as Props } from './types';
import { getSizeForViewport } from './utils';

export const Slider = memo(
  ({
    className,
    slideToShow = {},
    slideToShowDefaultSize,
    items: elements,
    render,
    before,
    after,
    setting,
    actions,
    sx,
    ...cardProps
  }: Props) => {
    const theme = useTheme();
    const { width } = useWindowDimensions();

    const responsive: ResponsiveObject[] = Object.keys(slideToShow).map(
      (k) => ({
        breakpoint: theme.breakpoints.values[k as Breakpoint],
        settings: {
          slidesToShow:
            slideToShow[k as Breakpoint] || slideToShowDefaultSize || 1,
        } as ResponsiveObject['settings'],
      })
    );

    const carousel = useCarousel({
      infinite: false,
      speed: 500,
      ...setting,
      responsive,
      slidesToShow: slideToShowDefaultSize || 1,
    });

    const shouldShowNextButton =
      carousel.carouselSettings.slidesToShow &&
      elements?.length &&
      elements?.length > 0 &&
      carousel.currentIndex ===
        (elements?.length as number) -
          getSizeForViewport(width, responsive, carousel);

    return (
      <Styled.Wrapper
        className={classnames('Slider', className)}
        {...cardProps}
        sx={merge(SX.root, cardProps.cardSx)}
        headerSx={merge(SX.header, cardProps.headerSx)}
        contentSx={merge(SX.content, cardProps.contentSx)}
        actions={
          <Styled.Actions>
            {actions}

            <IconButton
              onClick={carousel.onPrev}
              disabled={carousel.currentIndex === 0}
              icon={<Icon size={20} name="chevron-left" />}
            />
            <IconButton
              onClick={carousel.onNext}
              disabled={shouldShowNextButton as boolean}
              icon={<Icon size={20} name="chevron-right" />}
            />
          </Styled.Actions>
        }
      >
        {before}
        <Styled.Slider
          ref={carousel.carouselRef}
          {...carousel.carouselSettings}
          sx={{ '.slick-track': sx as any }}
        >
          {elements
            .filter((element) => element.pinned)
            .map((element) => render(element))}
          {elements
            .filter((element) => !element.pinned)
            .map((element) => render(element))}
        </Styled.Slider>
        {after}
      </Styled.Wrapper>
    );
  }
);

Slider.displayName = 'Slider';
