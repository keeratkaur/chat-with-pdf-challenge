import { Inter } from 'next/font/google';
import ClerkWrapper from './components/ClerkWrapper';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen h-screen overflow-hidden flex flex-col`}>
        <ClerkWrapper>
          {children}
        </ClerkWrapper>
      </body>
    </html>
  );
}
