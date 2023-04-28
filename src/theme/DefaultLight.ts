import {
  BorderOptions,
  SpacingTheme,
  ThemeObject,
  ThemePalette,
  TypographyOptions,
} from './ThemeInterface';

const DEFAULT_LIGHT_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
  large: 20,
};

export const DEFAULT_BORDER: BorderOptions = {
  baseBorderRadius: 4,
  mediumBorderRadius: 8,
  larderBorderRadius: 16,
  doubleBorderRadius: 24,
};

export const DEFAULT_LIGHT_THEME_MODE = 'light';

export const DEFAULT_PALETTE_COLORS_LIGHT: ThemePalette = {
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  primary: {
    main: '#7F56D9',
    light: '#B692F6',
    dark: '#53389E',
    contrastText: '#F2F4F7',
  },
  secondary: {
    main: '#3E4784',
    light: '#717BBC',
    dark: '#293056',
    contrastText: '#EAECF5',
  },
  error: {
    main: '#D92D20',
    light: '#F04438',
    dark: '#912018',
    contrastText: '#FDA29B',
  },
  warning: {
    main: '#DC6803',
    light: '#F79009',
    dark: '#93370D',
    contrastText: '#FEDF89',
  },
  info: {
    main: '#1570EF',
    light: '#2E90FA',
    dark: '#175CD3',
    contrastText: '#84CAFF',
  },
  success: {
    main: '#039855',
    light: '#12B76A',
    dark: '#027A48',
    contrastText: '#32D583',
  },
  text: {
    primary: '#293056',
    secondary: '#EAECF5',
    disabled: '#C7D7FE',
  },
  divider: '#98A2B3',
  background: {
    paper: '#F2F4F7',
    default: '#F9FAFB',
  },
  spacing: {
    ...DEFAULT_LIGHT_SPACING_THEME,
  },
  borders: {
    ...DEFAULT_BORDER,
  },
};

export const DEFAULT_TYPOGRAPHY_LIGHT: TypographyOptions = {
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

export const DEFAULT_LIGHT_THEME: ThemeObject = {
  mode: DEFAULT_LIGHT_THEME_MODE,
  palette: DEFAULT_PALETTE_COLORS_LIGHT,
  spacing: DEFAULT_LIGHT_SPACING_THEME,
  border: DEFAULT_BORDER,
  typography: DEFAULT_TYPOGRAPHY_LIGHT,
};
