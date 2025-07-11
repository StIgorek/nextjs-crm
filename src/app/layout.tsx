import React from "react";
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

/*export const metadata = {
    title: 'CRM',
    description: 'CRM program',
};*/

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
