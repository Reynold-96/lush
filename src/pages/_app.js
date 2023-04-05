import { Lato, Raleway } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import '@/styles/globals.scss';
import '@/styles/utilities.scss';

const lato = Lato({
  variable: '--lato-font',
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});
const raleway = Raleway({
  variable: '--raleway-font',
  style: 'normal',
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${raleway.variable} ${lato.variable} ${styles.home}`}>
      <Component {...pageProps} />
    </main>
  );
}
