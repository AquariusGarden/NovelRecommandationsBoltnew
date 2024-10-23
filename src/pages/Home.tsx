import React from 'react';
import SearchHero from '../components/SearchHero';
import PopularSection from '../components/PopularSection';

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <SearchHero />
      <PopularSection />
    </main>
  );
};

export default Home;