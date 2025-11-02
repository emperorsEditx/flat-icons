"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@myorg/ui";
import DashboardLayout from "./dashboard/components/DashboardLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DashboardLayout>{children}</DashboardLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
