import { FooterSection, Navbar } from '@/components';
import '@/styles/globals.css';
import { Space_Mono, Work_Sans } from '@next/font/google';

const secondaryFont = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-spaceMono',
});

const mainFont = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-Work_Sans',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={` ${mainFont.variable} ${secondaryFont.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <footer className='bg-bgSecondary'>
        <FooterSection />
      </footer>
    </div>
  );
}
