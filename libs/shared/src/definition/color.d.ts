import '@emotion/react';
import type { ThemeConfig } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';
import type { PropsWithChildren } from 'react';

export type ThemeColor =
  | 'red'
  | 'volcano'
  | 'orange'
  | 'gold'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'cyan'
  | 'blue'
  | 'geekblue'
  | 'purple'
  | 'magenta';

export type ThemePaletteOfColor<T extends ThemeColor> = {
  [K in `${T}-${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`]: string;
};

export type ThemePalette = {
  [K in `${ThemeColor}-${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`]: string;
};

export type ThemePaletteColor = Record<ThemeColor, string>;

export interface ThemeProviderProps extends PropsWithChildren {
  theme?: Partial<ThemeConfig>['token'];
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends AliasToken {}
}
