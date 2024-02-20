import { SxStyle, SxStyleFunc } from '@myapp/shared/theme';

export const accountPopover: SxStyle = {
  width: 300,
  px: 0,
  py: 0,
  backgroundImage: 'none',
  backgroundColor: (p) => p.palette.background.paper,
  border: '1px solid',
  borderColor: (p) => p.palette.primary.main,
};

export const actions: SxStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  borderColor: (theme) =>
    theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 700],
  backgroundColor: (theme) =>
    theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 200],
  borderBottom: 'solid 1px',
  borderBottomColor: (theme) =>
    theme.palette.grey[theme.palette.mode === 'dark' ? 700 : 400],
};

export const title: SxStyleFunc = (isOpen: boolean) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: isOpen ? 'space-between' : 'center',
  background: (p) => p.palette.grey[200],
  pr: 1,
  pl: isOpen ? 2 : 1,
  py: 1,
  borderBottom: '1px solid',
  borderColor: (p) => p.palette.grey[400],
});

export const navWrapper: SxStyleFunc = ({
  setting,
  sx,
}: {
  setting: any;
  sx?: SxStyle;
}) => ({
  display: 'flex',
  justifyContent: setting.title ? 'space-between' : 'center',
  alignItems: 'center',
  borderBottom: (theme) =>
    `1px solid ${
      theme.palette.grey[theme.palette.mode === 'dark' ? 700 : 300]
    }`,
  ...sx,
});

export const content: SxStyle = {
  display: 'flex',
  flexDirection: 'column',
  flex: '0 0 100%',
};
