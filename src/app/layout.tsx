import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlignRISE | Business Alignment Review",
  description:
    "AlignRISE helps owners, advisors, and leaders diagnose where the business is breaking and build an aligned, repeatable system across People, Product, and Profit.",
  icons: {
    icon: "/alignrise-icon.svg",
  },
  openGraph: {
    title: "AlignRISE | Business Alignment Review",
    description:
      "See where the business is breaking and what to fix first across People, Product, and Profit.",
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
