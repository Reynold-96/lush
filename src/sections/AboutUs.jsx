import FeatureCard from '@/components/FeatureCard';
import styles from './AboutUs.module.scss';
const features = [
  {
    id: 'indoor-plant',
    title: 'indoor plants',
    caption:
      'Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.',
  },
  {
    id: 'outdoor-plant',
    title: 'outdoor plants',
    caption:
      'Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants',
  },
  {
    id: 'bamboo',
    title: 'plant pots',
    caption:
      'Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor',
  },
];
export default function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          We Help choose the most <span>suitable plants for you </span>
        </h2>
        <p>
          Our selection includes a wide variety of flowers, from classic roses to exotic
          orchids, as well as a variety of lush indoor and outdoor plants and also offer
          unique floral arrangements that are perfect for any occasion, whether you're
          looking to brighten up your home or send a thoughtful gift.
        </p>
      </header>
      <div className={styles.features}>
        {features.map(({ id, title, caption }) => (
          <FeatureCard key={id} id={id} title={title} caption={caption} card='features' />
        ))}
      </div>
    </section>
  );
}
