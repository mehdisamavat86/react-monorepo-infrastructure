import { alpha } from '@mui/material/styles';

export type ColorSchema =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'default'
  | undefined;

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    superlight: string;
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  25: '#FCFCFD',
  50: '#F9FAFB',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#667085',
  600: '#475467',
  700: '#344054',
  800: '#1D2939',
  900: '#101828',
};

const PRIMARY = {
  25: '#FCFAFF',
  50: '#F1F4FF',
  100: '#CFDBFC',
  200: '#A0B7F8',
  300: '#7093F5',
  400: '#406FF2',
  500: '#1851EF',
  600: '#0A2D8F',
  700: '#0A2D8F',
  800: '#071E5F',
  900: '#42307D',
  superlight: '#F5FAFF',
  lighter: '#F1F4FF',
  light: '#CFDBFC',
  main: '#1851EF',
  dark: '#0A2D8F',
  darker: '#0A2D8F',
  contrastText: '#FFFFFF',
};

const SECONDARY = {
  lighter: '#EFD6FF',
  light: '#C684FF',
  main: '#8E33FF',
  dark: '#5119B7',
  darker: '#27097A',
  contrastText: '#FFFFFF',
};

const INFO = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

const SUCCESS = {
  25: '#F6FEF9',
  50: '#ECFDF3',
  100: '#D1FADF',
  200: '#A6F4C5',
  300: '#6CE9A6',
  400: '#32D583',
  500: '#12B76A',
  600: '#039855',
  700: '#027A48',
  800: '#05603A',
  900: '#054F31',
  lighter: '#ECFDF3',
  light: '#D1FADF',
  main: '#12B76A',
  dark: '#039855',
  darker: '#027A48',
  contrastText: '#ffffff',
};

const WARNING = {
  25: '#FFFCF5',
  50: '#FFFAEB',
  100: '#FEF0C7',
  200: '#FEDF89',
  300: '#FEC84B',
  400: '#FDB022',
  500: '#F79009',
  600: '#DC6803',
  700: '#B54708',
  800: '#93370D',
  900: '#7A2E0E',
  lighter: '#FFFAEB',
  light: '#FEF0C7',
  main: '#F79009',
  dark: '#DC6803',
  darker: '#B54708',
  contrastText: GREY[800],
};

const ERROR = {
  25: '#FFFBFA',
  50: '#FEF3F2',
  100: '#FEE4E2',
  200: '#FECDCA',
  300: '#FDA29B',
  400: '#F97066',
  500: '#F04438',
  600: '#D92D20',
  700: '#B42318',
  800: '#912018',
  900: '#7A271A',
  lighter: '#FEF3F2',
  light: '#FEE4E2',
  main: '#F04438',
  dark: '#D92D20',
  darker: '#B42318',
  contrastText: '#FFFFFF',
};

const DEFAULT = {
  lighter: '#F9FAFB',
  light: '#ECECEC',
  main: '#919EAB',
  dark: '#454F5B',
  darker: '#161C24',
  contrastText: '#FFFFFF',
};

const COMMON = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  default: DEFAULT,
  grey: GREY,
  divider: alpha(GREY[500], 0.2),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export function palette(mode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF',
      neutral: GREY[200],
    },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.12),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return mode === 'light' ? light : dark;
}
