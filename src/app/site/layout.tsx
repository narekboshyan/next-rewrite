import { Ubuntu } from 'next/font/google';
import '@/assets/styles/globals.scss';
import Footer from '@/components/Footer/Footer';
import dynamic from 'next/dynamic';
import 'swiper/css';

const Header = dynamic(() => import('@/components/Header/Header'), { ssr: false });

const ubuntuFont = Ubuntu({
  weight: ['300', '400', '500'],
  style: ['normal'],
  subsets: ['latin'],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ubuntuFont.className}>
        <div className="root">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
