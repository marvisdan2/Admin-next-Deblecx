"use client";

import { PropsWithChildren } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
// MUI THEME CREATION METHOD
import { createCustomTheme } from "./createTheme";
// SITE SETTINGS CUSTOM DEFINED HOOK
import useSettings from "hooks/useSettings";

export default function ThemeProvider({ children }: PropsWithChildren) {
  const { settings } = useSettings();
  const theme = createCustomTheme(settings);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </LocalizationProvider>
  );
}
