import { Logo } from '@myapp/shared/components/logo';
import { useOffSetTop } from '@myapp/shared/hooks';
import { bgBlur } from '@myapp/shared/theme/css';
import { AppBar, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { HEADER } from '../config-layout';
import HeaderShadow from './header-shadow';

export default function HeaderSimple() {
  const theme = useTheme();
  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Logo />
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
