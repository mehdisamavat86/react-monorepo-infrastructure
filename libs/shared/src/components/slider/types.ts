import { SxStyle } from '@myapp/shared/theme';
import { Breakpoint } from '@mui/material';
import { ReactNode } from 'react';
import { Settings } from 'react-slick';
import { CardBoxProps } from '../card-box';

export type CarouselSlidesToShowProps = Partial<Record<Breakpoint, number>>;

export interface SliderProps<
  T extends Record<string, any> = Record<string, any>
> extends CardBoxProps {
  className?: string;
  cardSx?: SxStyle;
  slideToShow?: CarouselSlidesToShowProps;
  slideToShowDefaultSize?: number;
  items: (T & { pinned?: boolean })[];
  before?: ReactNode;
  after?: ReactNode;
  setting?: Settings;
  render: (element: T & { pinned?: boolean }) => ReactNode;
}
