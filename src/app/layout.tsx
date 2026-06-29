import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlignRISE | Self-Directed Business Alignment System",
  description:
    "AlignRISE is a self-directed business alignment system that helps owners, advisors, and leaders diagnose where the business is breaking and build repeatable systems across People, Product, and Profit.",
  icons: {
    icon: "/alignrise-icon.svg",
  },
  openGraph: {
    title: "AlignRISE | Self-Directed Business Alignment System",
    description:
      "Run your own business alignment review, see where the business is breaking, and build the system before you automate the chaos.",
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
