import type { Metadata } from "next";
import { PropsWithChildren } from "react";
// THEME PROVIDER
import ThemeProvider from "theme/ThemeProvider";
// SITE SETTINGS CONTEXT
import SettingsProvider from "contexts/settingsContext";
// FIREBASE AUTH PROVIDER
import { AuthProvider } from "contexts/firebaseContext";
// NEXT FONT UTILS
import { inter } from "utils/font";
// RIGHT-TO-LEFT SUPPORT COMPONENT
import RTL from "components/rtl";
// MULTI LANGUAGE FEATURE
import "i18n";

// THIRD PARTY LIBRARY CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-quill/dist/quill.snow.css";
import "simplebar-react/dist/simplebar.min.css";
import "pure-react-carousel/dist/react-carousel.es.css";

export const metadata: Metadata = {
  title: "Uko Dashboard Template",
  description: "Nextjs Admin Template"
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <SettingsProvider>
          <ThemeProvider>
            <AuthProvider>
              <RTL>{children}</RTL>
            </AuthProvider>
          </ThemeProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
