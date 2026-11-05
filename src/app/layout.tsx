import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./mobile-menu-fix.css";

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
      <body><script dangerouslySetInnerHTML={{ __html: "(function(){var n=performance.getEntriesByType('navigation')[0];if(n&&n.type==='reload'&&!location.hash){history.scrollRestoration='manual';window.addEventListener('pageshow',function(){document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,0);requestAnimationFrame(function(){window.scrollTo(0,0);document.documentElement.style.scrollBehavior='';});});}})();" }} />{children}</body>
    </html>
  );
}
