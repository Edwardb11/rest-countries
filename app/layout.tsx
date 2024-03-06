import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/theme-provider";
import { Nunito_Sans } from "next/font/google";
import Header from "./components/header/header";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Rest Countries",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-veryLightGray_LightModeBG dark:bg-veryDarkBlue_DarkModeBG`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
