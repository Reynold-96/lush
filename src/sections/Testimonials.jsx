import TestimonialCard from '@/components/TestimonialCard';
import styles from './Testimonials.module.scss';

const testimonials = [
  {
    id: 'z-plant',
    name: 'Jessica Watson',
    src: '/img/testimonial-user-1.png',
    testimony:
      'Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.',
  },
  {
    id: 'snake-plant',
    name: 'Kate Szu',
    src: '/img/testimonial-user-2.png',
    testimony: 'Great service, beautiful flowers, timely delivery. Highly recommend.',
  },
  {
    id: 'bamboo',
    name: 'Grace',
    src: '/img/testimonial-user-3.png',
    testimony:
      'I am very happy with my purchase from this website, the plants were healthy and arrived on time.',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonial}>
      <h2>What do they say about us</h2>
      <div className={styles.testimonials}>
        {testimonials.map(({ id, name, src, testimony }) => (
          <TestimonialCard key={id} id={id} name={name} src={src} testimony={testimony} />
        ))}
      </div>
    </section>
  );
}
