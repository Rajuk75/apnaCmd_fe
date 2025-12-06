import React, { lazy, Suspense, useCallback, memo } from 'react';
import Layout from '../components/layout/Layout';
import SectionLoader from '../components/common/SectionLoader';
import HeroSection from '../components/home/HeroSection';




const Home = () => {
  return (
    <Layout>
      <HeroSection />
      


    </Layout>
  );
};

export default Home;
