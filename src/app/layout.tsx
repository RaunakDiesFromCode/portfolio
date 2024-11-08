import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Switcher from "@/components/navbar";
import { highlightFont } from "./fonts";

export const metadata: Metadata = {
  title: "Hi From Raunak",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={highlightFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="fixed top-0 left-0 right-0 z-50 p-4">
            <Switcher />
          </nav>
          <main className="pt-3">{children}</main>
          <footer className="py-4">{/* Footer content goes here */}</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
