import React from 'react';
import dynamic from 'next/dynamic';
import Glimpse from '@/components/Glimpse';
import Resources from '@/components/Resources';
import FAQ from '@/components/FAQ';
import Feedback from '@/components/Feedback';
// Import Footer only if needed
// import Footer from '@/components/Footer';

// Dynamically import the carousel component without SSR
const CarouselComponent = dynamic(() => import('@/components/CarouselComponent'), { ssr: false });

const Page = () => {
  return (
    <div>
      <Glimpse />
      <Resources />
      <CarouselComponent />
      <FAQ />
      <Feedback />
      {/* Uncomment if Footer is needed */}
      {/* <Footer /> */}
    </div>
  );
}

export default Page;
