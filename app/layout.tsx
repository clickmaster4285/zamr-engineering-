import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("h-full antialiased", "font-sans", inter.variable)}>
      <body className={`${outfit.className} min-h-full flex flex-col items-center`}>
        {children}
      </body>
    </html>
  );
}
