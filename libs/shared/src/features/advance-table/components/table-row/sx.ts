import { SxStyleFunc } from '@myapp/shared/theme';

export const row: SxStyleFunc<boolean | undefined> = (isSelected) => ({
  background: isSelected
    ? (p) => p.palette.primary[50]
    : (p) => p.palette.common.white,
});
