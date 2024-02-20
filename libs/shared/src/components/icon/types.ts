import type { SxStyle, SxStyleThemeValueFunc } from '@myapp/shared/theme';
import type { IconifyIcon } from '@iconify/react';
import type { icons } from './config';

export type IconName = keyof typeof icons;

export type IconType =
  | IconName
  | JSX.Element
  | { src: string; sx: SxStyle }
  | (() => JSX.Element);

export interface IconProps
  extends Pick<IconifyIcon, 'rotate' | 'hFlip' | 'vFlip'> {
  className?: string;
  sxx?: SxStyle; // let it be sxx
  name: IconType;
  size?: number;
  color?: string | SxStyleThemeValueFunc;
  rel?: string;
  onClick?: VoidFunction | ((e: any) => void);
}
