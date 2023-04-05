import styles from './InputEmail.module.scss';

export default function InputEmail({ className }) {
  return (
    <input
      name="email"
      id="email"
      className={`${styles.email} ${className}`}
      placeholder="Enter Email"
    />
  );
}
