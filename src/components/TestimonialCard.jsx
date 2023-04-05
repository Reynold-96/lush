import Image from 'next/image';
import styles from './TestimonialCard.module.scss';

export default function TestimonialCard({ id, src, name, testimony }) {
  return (
    <div className={styles.container}>
      <svg className={styles.bgImage}>
        <use href={`/svg/figures.svg#${id}`} />
      </svg>
      <Image className={styles.user} src={src} alt='user' width={64} height={64} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.testimony}>{testimony}</p>
    </div>
  );
}
