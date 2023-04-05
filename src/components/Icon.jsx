import styles from './Icon.module.scss';

export default function Icon({ id, className }) {
  return (
    <svg className={`${className} ${styles.icon} `}>
      <use href={`svg/icons.svg#${id}`} />
    </svg>
  );
}
