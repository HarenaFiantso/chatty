import PropTypes from "prop-types";
import { useMemo, ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  Theme,
  ThemeOptions,
} from "@mui/material/styles";
import useSettings from "../hooks/useSettings";
import palette from "./Palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

interface ThemeProviderProps {
  children: ReactNode;
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const { themeMode, themeDirection } = useSettings();

  const isLight = themeMode === "light";

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme: Theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
