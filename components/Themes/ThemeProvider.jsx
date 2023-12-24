'use client';

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider 
      disableTransitionOnChange={true}
      storageKey="theme-preference"
      defaultTheme="system"
      enableSystem={true}
      enableColorScheme={true}
      themes={['light', 'dark']}
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  );
}
