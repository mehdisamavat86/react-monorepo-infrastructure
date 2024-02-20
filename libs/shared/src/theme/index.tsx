import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from '@mui/material/styles';
import { merge } from 'lodash-es';
import { useMemo } from 'react';
import { useSettingsContext } from '../components/settings';
import { customShadows } from './custom-shadows';
import * as Styled from './global-styles';
import { contrast } from './options/contrast';
import { darkMode } from './options/dark-mode';
import { presets } from './options/presets';
import RTL, { direction } from './options/right-to-left';
import { componentsOverrides } from './overrides';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';

export * from './css';
export * from './types';
export * from './typography';
export * from './utils';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const settings = useSettingsContext();

  const darkModeOption = darkMode(settings.themeMode);

  const presetsOption = presets(settings.themeColorPresets);

  const contrastOption = contrast(
    settings.themeContrast === 'bold',
    settings.themeMode
  );

  const directionOption = direction(settings.themeDirection);

  const baseOption = useMemo(
    () => ({
      palette: palette('light'),
      shadows: shadows('light'),
      customShadows: customShadows('light'),
      typography,
      shape: { borderRadius: 8 },
    }),
    []
  );

  const memoizedValue = useMemo(
    () =>
      merge(
        // Base
        baseOption,
        // Direction: remove if not in use
        directionOption,
        // Dark mode: remove if not in use
        darkModeOption,
        // Presets: remove if not in use
        presetsOption,
        // Contrast: remove if not in use
        contrastOption.theme
      ),
    [
      baseOption,
      directionOption,
      darkModeOption,
      presetsOption,
      contrastOption.theme,
    ]
  );

  const theme = createTheme({
    ...memoizedValue,
  } as ThemeOptions);

  theme.components = merge(
    componentsOverrides(theme),
    contrastOption.components
  );

  return (
    <MuiThemeProvider theme={theme}>
      <Styled.Global>
        <RTL themeDirection={settings.themeDirection}>
          <CssBaseline />
          {children}
        </RTL>
      </Styled.Global>
    </MuiThemeProvider>
  );
}
