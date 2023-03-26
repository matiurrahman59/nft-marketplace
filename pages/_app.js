import { Navbar } from '@/components';
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
      <main className='main-container px-[30px] font-sans md:px-[72px] lg:px-[115px]'>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
