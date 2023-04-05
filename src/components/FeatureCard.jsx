import styles from './FeatureCard.module.scss';

export default function FeatureCard({ id, title, caption, card = 'features' }) {
  return (
    <figure className={styles[`${card}`]}>
      <svg>
        <use href={`/svg/figures.svg#${id}`} />
      </svg>
      <figcaption className={styles.figcaption}>
        <h3 className={styles.title}>{title}</h3>
        <p>{caption}</p>
      </figcaption>
    </figure>
  );
}
