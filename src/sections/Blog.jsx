import styles from './Blog.module.scss';
import BlogCard from '@/components/BlogCard';

const blogs = [
  {
    id: 1,
    title: 'More productive with an atmosphere of greenery',
    caption:
      'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
    date: 'January 20, 2023',
    link: '/',
  },
  {
    id: 2,
    title: 'The benefits of plants in your room',
    caption:
      'Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....',
    date: 'January 20, 2023',
    link: '/',
  },
  {
    id: 3,
    title: 'Hobbyist plants in the house',
    caption:
      'Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....',
    date: 'January 20, 2023',
    link: '/',
  },
];

export default function Blog() {
  return (
    <section className={styles.blog}>
      <h2 className={styles.title}>Interesting blog to read</h2>

      <div className={styles.blogs}>
        {blogs.map(({ id, title, caption, date, link }) => (
          <BlogCard
            key={id}
            title={title}
            imageUrl={`/img/blog-${id}.png`}
            caption={caption}
            date={date}
            link={link}
          />
        ))}
      </div>
    </section>
  );
}
