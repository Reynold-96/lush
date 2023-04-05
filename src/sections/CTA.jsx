import Image from 'next/image';
import styles from './CTA.module.scss';
import Button from '@/components/Button';
import InputEmail from '@/components/InputEmail';

export default function CTA() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Enter your email address for our mailing Promo or other interesting things
        </h2>
        <div className={styles.cta}>
          <InputEmail className={styles.email} />
          <Button className={styles.btn} variant='primary' size='small'>
            submit
          </Button>
        </div>
      </div>

      <Image
        className={styles.bgImage}
        src='/img/cta-bg.png'
        alt='background-image'
        fill
      />
    </section>
  );
}
