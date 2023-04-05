import Image from 'next/image';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import Icon from '@/components/Icon';

const navLinks = [
  { id: 1, title: 'home', url: '/' },
  { id: 2, title: 'about us', url: '/' },
  { id: 3, title: 'product', url: '/' },
  { id: 4, title: 'blog', url: '/' },
  { id: 5, title: 'contact us', url: '/' },
];

export default function Navbar({ myref }) {
  const [state, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          setState(true);
          return;
        }

        setState(false);
      },
      { threshold: 0.87 }
    );
    observer.observe(myref.current);
  }, []);

  return (
    <nav className={`${styles.nav} ${state ? styles.navChangeColor : ''}`}>
      <div className={styles.wrapper}>
        <figure className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src='/img/logo.png'
            alt='lush-logo'
            fill
            priority
            sizes='(max-width: 1440px) 100vw'
          />
        </figure>

        <label className={styles.menuLine} htmlFor={styles.checkbox}>
          <Icon className={styles.icon} id={'menu-line'} />
        </label>
        <input type='checkbox' name='menu' id={styles.checkbox} placeholder='menu' />
        <ul className={styles.navLinks}>
          {navLinks.map(({ id, title, url }) => (
            <li key={id}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
