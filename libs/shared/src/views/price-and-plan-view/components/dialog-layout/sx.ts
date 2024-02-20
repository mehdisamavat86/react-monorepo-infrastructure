import { SxStyle, SxStyleFunc } from '@myapp/shared/theme';

export const icon: SxStyleFunc<boolean | undefined> = (success) => ({
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: success
    ? (p) => p.palette.success.dark
    : (p) => p.palette.primary.main,
  borderRadius: '50%',
});

export const iconWrapper: SxStyle = {
  position: 'absolute',
  top: (p) => p.spacing(2),
  right: 0,
  left: 0,
};
