import Image from 'next/image';
import styles from './ProductCard.module.scss';
import Button from './Button';
import Icon from './Icon';

export default function ProductCard({ id, src }) {
  return (
    <div className={styles.product}>
      <figure className={styles.wrapper}>
        <Image
          className={styles.img}
          src={src}
          alt='product-image'
          fill
          placeholder='blur'
          blurDataURL='img/logo-green.png'
          sizes='(max-width: 425px) 100vw,
        (max-width: 768px) 50vw,
        (max-width: 1024px) 33vw,
        (max-width: 1440px) 25vw,
        '
        />
      </figure>

      <div className={styles.desc}>
        <h4 className={styles.name}>cactus</h4>
        <span className={styles.price}>(${8})</span>
        <span className={styles.deal}>${10}</span>
      </div>

      <Button className={styles.cta} variant='secondary-green' size='xsmall'>
        buy now
      </Button>

      <input className={styles.checkbox} type='checkbox' name='heart' id={id} />
      <label htmlFor={id} className={styles.heart}>
        <Icon className={styles.heartIcon} id='heart' />
      </label>
    </div>
  );
}
