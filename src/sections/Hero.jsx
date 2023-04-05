import Button from '@/components/Button';
import styles from './Hero.module.scss';
import Image from 'next/image';

export default function Hero({ myref }) {
  return (
    <header className={styles.hero}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Nature's Beauty <span>Delivered to You</span>
        </h1>
        <p className={styles.subtitle}>
          Nature's beauty is just a click away with our online flower and plant shop. We
          offer a wide variety of flowers that will bring a touch of nature to your home!
        </p>

        <div className={styles.cta}>
          <Button variant='primary' size='large'>
            Book Now
          </Button>
          <Button variant='secondary-white' size='large'>
            Watch Video
          </Button>
        </div>
      </div>

      <Image
        ref={myref}
        className={styles.bgImage}
        src='/img/hero.png'
        alt='hero'
        fill
        priority
        sizes='(max-width: 1440px) 100vw'
        placeholder='blur'
        blurDataURL='img/logo-green.png'
      />
    </header>
  );
}
