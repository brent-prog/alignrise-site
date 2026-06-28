import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlignRISE | Business Alignment System",
  description:
    "AlignRISE helps owners, advisors, and leaders diagnose business gaps, align People, Product, and Profit, and build repeatable systems for growth.",
  icons: {
    icon: "/alignrise-icon.svg",
  },
  openGraph: {
    title: "AlignRISE | Business Alignment System",
    description:
      "Build the system your business needs to scale without everything depending on you.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
