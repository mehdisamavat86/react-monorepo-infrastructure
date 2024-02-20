import type { SxProps, Theme } from '@mui/material/styles';

export type SxStyle = SxProps<Theme>;
export type SxStyleFunc<T = any> = (value: T) => SxProps<Theme>;
export type SxStyleThemeValueFunc = (theme: Theme) => string;
