import styles from './Button.module.scss';

export default function Button({ children, variant, size, className }) {
  return (
    <button className={`${styles.btn} ${styles[size]} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
