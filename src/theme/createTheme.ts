import { useMemo } from "react";
import { createTheme, responsiveFontSizes, ThemeOptions } from "@mui/material/styles";
import merge from "lodash.merge";

import { shadows } from "./shadows";
import themesOptions from "./themeOptions";
import componentsOverride from "./components";

import { inter } from "utils/font";
import { THEMES } from "utils/constants";

const baseOptions = {
  direction: "ltr",
  typography: { fontFamily: inter.style.fontFamily },
  breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } }
};

export type ThemeSettings = {
  theme: string;
  activeLayout?: string;
  direction: "ltr" | "rtl";
  responsiveFontSizes?: boolean;
};

export const createCustomTheme = (settings: ThemeSettings) => {
  /**
   * settings.theme value is 'light' or 'dark'
   * update settings in contexts/settingsContext.tsx
   */
  let themeOptions = themesOptions[settings.theme];

  // console.log(themeOptions);

  if (!themeOptions) {
    themeOptions = themesOptions[THEMES.LIGHT];
  }

  const mergedThemeOptions = useMemo(
    () => merge({}, baseOptions, themeOptions, { direction: settings.direction }),
    [baseOptions, themeOptions, settings.direction]
  );

  let theme = createTheme(mergedThemeOptions as ThemeOptions);

  // OVERRIDE SHADOWS
  theme.shadows = shadows(theme);

  // OVERRIDE COMPONENTS
  theme.components = componentsOverride(theme);

  if (settings.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
