import { ReactNode } from "react";

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface Color {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
}

export interface GreyColors {
  [key: number]: string;
  [key: string]: string;
}

export interface Gradients {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

export interface ChartColors {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
}

export interface ActionColors {
  hover: string;
  selected: string;
  disabled: string;
  disabledBackground: string;
  focus: string;
  hoverOpacity: number;
  disabledOpacity: number;
}

export interface Common {
  common: { black: string; white: string };
  primary: Color & { contrastText: string };
  secondary: Color & { contrastText: string };
  info: Color & { contrastText: string };
  success: Color & { contrastText: string };
  warning: Color & { contrastText: string };
  error: Color & { contrastText: string };
  grey: GreyColors;
  gradients: Gradients;
  chart: ChartColors;
  divider: string;
  action: ActionColors;
}

export interface Palette {
  light: Object;
  dark: Object;
}

export interface ResponsiveFontSizesOptions {
  sm: number;
  md: number;
  lg: number;
}

export interface TypographyVariant {
  fontWeight: number;
  lineHeight: number;
  fontSize: string;
  letterSpacing?: number;
  textTransform?: string;
}

export interface Typography {
  fontFamily: string;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  h1: TypographyVariant & Partial<ResponsiveFontSizesOptions>;
  h2: TypographyVariant & Partial<ResponsiveFontSizesOptions>;
  h3: TypographyVariant & Partial<ResponsiveFontSizesOptions>;
  h4: TypographyVariant & Partial<ResponsiveFontSizesOptions>;
  h5: TypographyVariant & Partial<ResponsiveFontSizesOptions>;
  h6: TypographyVariant & Partial<ResponsiveFontSizesOptions>;
  subtitle1: TypographyVariant;
  subtitle2: TypographyVariant;
  body1: TypographyVariant;
  body2: TypographyVariant;
  caption: TypographyVariant;
  overline: TypographyVariant;
  button: TypographyVariant;
  article: { fontWeight: number };
}
