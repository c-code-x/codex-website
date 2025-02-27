import React from 'react'
import styles from "../styles/Body.module.css";
import Glimpse from '@/components/Glimpse';
import Resources from '@/components/Resources';
import FAQ from '@/components/FAQ';
import Memories from '@/components/memories';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';
import CarouselComponent from '@/components/CarouselComponent';

const page = () => {
  return (
      <div>
          <Glimpse />
          <Resources />
          <CarouselComponent />
          <FAQ />
          <Feedback />
      </div>
  );
}

export default page