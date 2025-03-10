"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "@/app/components/Sidebar"; // ✅ Import Sidebar

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
            <Sidebar />
            <main style={{ flexGrow: 1, padding: "20px" }}>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
