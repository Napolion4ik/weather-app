import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Weather",
  description: "User,weather and good day",
};

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
