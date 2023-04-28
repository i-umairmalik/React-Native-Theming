export interface SpacingTheme {
  base?: number;
  double?: number;
  large?: number;
}

export interface ThemeObject {
  breakpoints?: BreakPoint;
  mode?: string;
  palette?: ThemePalette;
  spacing?: SpacingTheme;
  border?: BorderOptions;
  typography?: TypographyOptions;
}

export interface BreakPoint {
  xs?: number;
  sm?: number;
  lg?: number;
  xl?: number;
}
export interface CommonColors {
  black?: string;
  white?: string;
}

export interface ColorsOptions {
  main?: string;
  light?: string;
  dark?: string;
  contrastText?: string;
}
export interface TextOptions {
  primary?: string;
  secondary?: string;
  disabled?: string;
}
export interface BackgroundColors {
  paper?: string;
  default?: string;
}
export interface BorderOptions {
  baseBorderRadius?: number;
  mediumBorderRadius?: number;
  larderBorderRadius?: number;
  doubleBorderRadius?: number;
}
export interface Heading_BodyThemeOptions {
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: number | Float32Array;
  letterSpacing?: string;
}
export interface ButtonOptions {
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: number | Float32Array;
  letterSpacing?: string;
  textTransform?: string;
}
export interface TypographyOptions {
  baseFontSize?: number;
  fontFamily?: string;
  fontSize?: number;
  fontWeightLight?: number;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
  fontSizeSmall?: number;
  fontSizeMedium?: number;
  fontSizeLarge?: number;
  fontSzeExtraLarge?: number;
  h1?: Heading_BodyThemeOptions;
  h2?: Heading_BodyThemeOptions;
  h3?: Heading_BodyThemeOptions;
  h4?: Heading_BodyThemeOptions;
  h5?: Heading_BodyThemeOptions;
  h6?: Heading_BodyThemeOptions;
  subtitle1?: Heading_BodyThemeOptions;
  subtitle2?: Heading_BodyThemeOptions;
  body1?: Heading_BodyThemeOptions;
  body2?: Heading_BodyThemeOptions;
  button?: ButtonOptions;
  caption?: Heading_BodyThemeOptions;
  overline?: ButtonOptions;
}

export interface ThemePalette {
  common?: CommonColors;
  primary?: ColorsOptions;
  secondary?: ColorsOptions;
  error?: ColorsOptions;
  warning?: ColorsOptions;
  info?: ColorsOptions;
  success?: ColorsOptions;
  text?: TextOptions;
  divider?: string;
  background?: BackgroundColors;
  spacing?: SpacingTheme;
  borders?: BorderOptions;
}
