import { Urbanist } from 'next/font/google';
import './globals.css';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';

const urbanist = Urbanist({
  weight: 'variable',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Texmart',
  description: 'Texmart Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased`}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
