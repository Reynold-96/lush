import FeatureCard from '@/components/FeatureCard';
import styles from './Benefit.module.scss';
import Image from 'next/image';

const features = [
  {
    id: 'time-consuming',
    title: 'quality product',
    caption:
      'Our flowers are of the highest quality, carefully selected and sourced from reputable',
  },
  {
    id: 'grow-sprout',
    title: 'always fresh',
    caption:
      'Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.',
  },
  {
    id: 'temperature',
    title: 'work smart',

    caption:
      'We work smart, using innovative techniques and technology to streamline our processes',
  },
  {
    id: 'pruning',
    title: 'excellent service',

    caption:
      "We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs",
  },
];

export default function Benefit() {
  return (
    <section className={styles.benefit}>
      <figure className={styles.wrapper}>
        <Image
          className={styles.img}
          alt='benefit-image'
          src='/img/benefit.png'
          fill
          priority
          sizes='(max-width) 50vw'
          placeholder='blur'
          blurDataURL='img/logo-green.png'
        />
      </figure>
      <div className={styles.benefits}>
        {features.map(({ id, title, caption }) => (
          <FeatureCard key={id} id={id} title={title} caption={caption} card='benefits' />
        ))}
      </div>
    </section>
  );
}
