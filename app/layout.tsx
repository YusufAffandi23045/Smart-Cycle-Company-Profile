"use client";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="layout">
            <Navbar />
            <main className="main">{children}</main>
            <Footer />
          </div>
  </ThemeProvider>
</body>
    </html>
  );
}