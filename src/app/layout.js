import '../styles/globals.css';

import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'أمريكان إكسبريس قطر - احصل على بطاقتك الآن',
  description:
    'قدم طلبك للحصول على بطاقة أمريكان إكسبريس في قطر واستمتع بمزايا حصرية ومكافآت سخية'
};

export default function RootLayout({ children }) {
  return (
    <html lang='ar' dir='rtl'>
      <body
        className={`${inter.className} bg-amex-dark flex min-h-screen flex-col text-white`}
      >
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
