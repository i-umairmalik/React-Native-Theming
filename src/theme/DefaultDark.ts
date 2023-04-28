import {
  BorderOptions,
  SpacingTheme,
  ThemeObject,
  ThemePalette,
  TypographyOptions,
} from './ThemeInterface';

const DEFAULT_DARK_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
  large: 20,
};

export const DEFAULT_BORDER_DARK: BorderOptions = {
  baseBorderRadius: 4,
  mediumBorderRadius: 8,
  larderBorderRadius: 16,
  doubleBorderRadius: 24,
};

export const DEFAULT_DARK_THEME_MODE = 'dark';

export const DEFAULT_PALETTE_COLORS_DARK: ThemePalette = {
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  primary: {
    main: '#5925DC',
    light: '#6938EF',
    dark: '#4A1FB8',
    contrastText: '#101323',
  },
  secondary: {
    main: '#3E4784',
    light: '#717BBC',
    dark: '#293056',
    contrastText: '#344054',
  },
  error: {
    main: '#D92D20',
    light: '#F04438',
    dark: '#912018',
    contrastText: '#344054',
  },
  warning: {
    main: '#DC6803',
    light: '#F79009',
    dark: '#93370D',
    contrastText: '#344054',
  },
  info: {
    main: '#1570EF',
    light: '#2E90FA',
    dark: '#175CD3',
    contrastText: '#344054',
  },
  success: {
    main: '#039855',
    light: '#12B76A',
    dark: '#027A48',
    contrastText: '#344054',
  },
  text: {
    primary: '#AFB5D9',
    secondary: '#D5D9EB',
    disabled: '#EAECF5',
  },
  divider: '#F8F9FC',
  background: {
    paper: '#101828',
    default: '#1D2939',
  },
  spacing: {
    ...DEFAULT_DARK_SPACING_THEME,
  },
  borders: {
    ...DEFAULT_BORDER_DARK,
  },
};

export const DEFAULT_TYPOGRAPHY_DARK: TypographyOptions = {
  baseFontSize: 18,
  fontFamily: '"Roboto", "Arial", "san-serif"',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeSmall: 12,
  fontSizeMedium: 14,
  fontSizeLarge: 18,
  fontSzeExtraLarge: 20,
  h1: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 300,
    fontSize: '6rem',
    lineHeight: 1.167,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 300,
    fontSize: '3.75rem',
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 400,
    fontSize: '3rem',
    lineHeight: 1.167,
    letterSpacing: '0em',
  },
  h4: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 400,
    fontSize: '2.125rem',
    lineHeight: 1.235,
    letterSpacing: '0.0735em',
  },
  h5: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: 1.334,
    letterSpacing: '0em',
  },
  h6: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: 1.6,
    letterSpacing: '0.0735em',
  },
  subtitle1: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },
  body1: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
  button: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
  caption: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  overline: {
    fontFamily: '"Roboto", "Arial", "san-serif"',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 2.66,
    letterSpacing: '0.03333em',
    textTransform: 'uppercase',
  },
};

export const DEFAULT_DARK_THEME: ThemeObject = {
  mode: DEFAULT_DARK_THEME_MODE,
  palette: DEFAULT_PALETTE_COLORS_DARK,
  spacing: DEFAULT_DARK_SPACING_THEME,
  border: DEFAULT_BORDER_DARK,
  typography: DEFAULT_TYPOGRAPHY_DARK,
};
