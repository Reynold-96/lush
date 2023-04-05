import Image from 'next/image';
import styles from './Gallery.module.scss';

const props = {
  alt: 'gallery-image',
  fill: true,
  sizes: '(max-width: 1440px) 33vw',
  placeholder: 'blur',
  blurDataURL: 'img/logo-green.png',
};

const gallery = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      {gallery.map(({ id }) => (
        <figure className={styles.wrapper} key={id}>
          <Image className={styles.img} src={`/img/gallery-image-${id}.jpg`} {...props} />
        </figure>
      ))}
    </div>
  );
}
