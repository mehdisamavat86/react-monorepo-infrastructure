import type { TypographyProps } from '@mui/material';
import type { SxStyle } from '@myapp/shared/theme';
import type { PropsWithChildren, ReactNode } from 'react';

type Typo = Omit<TypographyProps, 'children'>;

export interface CardBoxProps extends PropsWithChildren {
  className?: string;
  hideHeader?: boolean;
  headerSx?: SxStyle;
  title?: ReactNode;
  titleProps?: Typo;
  subTitle?: ReactNode;
  subTitleProps?: Typo;
  sx?: SxStyle;
  contentSx?: SxStyle;
  contentGradient?: boolean;
  shadow?: boolean;
  actions?: ReactNode;
  transparent?: boolean;
}
