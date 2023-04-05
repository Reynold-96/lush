import Head from 'next/head';
import { useRef } from 'react';

import styles from '@/styles/Home.module.scss';
import Hero from '@/sections/Hero';
import AboutUs from '@/sections/AboutUs';
import ProductCard from '@/components/ProductCard';
import Product from '@/sections/Product';
import Testimonials from '@/sections/Testimonials';
import Blog from '@/sections/Blog';
import CTA from '@/sections/CTA';
import Gallery from '@/sections/Gallery';
import Benefit from '@/sections/Benefit';
import Footer from '@/sections/Footer';
import Navbar from '@/sections/Navbar';

export default function Home() {
  const myref = useRef();

  return (
    <>
      <Head>
        <meta name='lush' content='Florist Landing Page' />
        <title>Lush</title>
      </Head>
      <Navbar myref={myref} />
      <Hero myref={myref} />
      <AboutUs />
      <Product />
      <Benefit />
      <Gallery />
      <Testimonials />
      <CTA />
      <Blog />
      <Footer />
    </>
  );
}
