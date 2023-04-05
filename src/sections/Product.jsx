import styles from './Product.module.scss';
import ProductCard from '@/components/ProductCard';

const products = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

export default function Product() {
  return (
    <section className={styles.product}>
      <h2>What we offer to you</h2>
      <div className={styles.products}>
        {products.map(({ id }) => (
          <ProductCard key={id} id={id} src={`/img/product-${id}.png`} />
        ))}
      </div>
    </section>
  );
}
