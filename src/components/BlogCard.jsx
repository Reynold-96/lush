import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogCard.module.scss';
import Icon from './Icon';

export default function BlogCard({ title, imageUrl, caption, date, link }) {
  return (
    <div className={styles.container}>
      <figure className={styles.thumbnail}>
        <Image
          className={styles.img}
          src={imageUrl}
          alt='blog-thumnail'
          fill
          sizes='(max-width: 1440px) 33vw'
          placeholder='blur'
          blurDataURL='img/logo-green.png'
        />
      </figure>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.caption}>{caption}</p>
      <div className={styles.footer}>
        <span className={styles.date}>
          <Icon id='calendar' />
          {date}
        </span>
        <Link href={link}>
          <span className={styles.readMore}>
            Read More
            <Icon id='arrow-right' />
          </span>
        </Link>
      </div>
    </div>
  );
}
