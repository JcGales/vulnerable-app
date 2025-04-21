import React from 'react';
import Hero from '../components/hero';
import LatestCollection from '../components/latestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsKetterBox from '../components/NewsKetterBox';


const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsKetterBox/>
    </div>
  );
};

// Siguraduhing naka-export
export default Home;
