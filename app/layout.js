import './globals.css';

export const metadata = {
  title: 'AlignRise | AlignRise Score',
  description: 'Take the AlignRise Score assessment to identify where your business is aligned, vulnerable, and ready to improve.',
  metadataBase: new URL('https://alignrise.ca'),
  openGraph: {
    title: 'AlignRise | Get Your AlignRise Score',
    description: 'A practical business alignment assessment for owners who want a business that is easier to run, scale, and improve.',
    url: 'https://alignrise.ca',
    siteName: 'AlignRise',
    type: 'website'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
