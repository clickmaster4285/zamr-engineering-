import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zamr Engineering",
  description: "ZAMR Engineering is a leading Australian civil and infrastructure engineering consultancy delivering road, transport, energy, compliance, and development solutions across New South Wales, Queensland, and Victoria since 2012.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${outfit.className} min-h-full flex flex-col items-center`}>
        {children}
      </body>
    </html>
  );
}
