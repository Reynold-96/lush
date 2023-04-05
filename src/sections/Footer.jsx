import Link from 'next/link';
import styles from './Footer.module.scss';

const socialLinks = [
  { id: 1, name: 'instagram', url: '/' },
  { id: 2, name: 'facebook', url: '/' },
  { id: 3, name: 'twitter', url: '/' },
];
const navLinks = [
  { id: 1, title: 'home', url: '/' },
  { id: 2, title: 'about us', url: '/' },
  { id: 3, title: 'product', url: '/' },
  { id: 4, title: 'delivery', url: '/' },
  { id: 5, title: 'blog', url: '/' },
  { id: 6, title: 'contact us', url: '/' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <h2>Feel free to contact us</h2>
        <ul className={styles.socialLinks}>
          {socialLinks.map(({ id, url, name }) => (
            <li key={id}>
              <Link href={url} className={styles.socialLink}>
                <svg className={styles.icon}>
                  <use href={`/svg/icons.svg#${name}`} />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.navLinks}>
          {navLinks.map(({ id, title, url }) => (
            <li key={id}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.copyright}>
        Copyright &copy; 2021 Lush. <span>All rights reserved.</span>
      </p>
      <svg className={styles.bgSvg1}>
        <use href='/svg/figures.svg#monstera' />
      </svg>
      <svg className={styles.bgSvg2}>
        <use href='/svg/figures.svg#fern' />
      </svg>
    </footer>
  );
}
