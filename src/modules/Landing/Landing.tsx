import * as React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ConnectWithUs from './components/ConnectWithUs';
import AboutUs from './components/AboutUs';
import Feedback from './components/Feedback';
import Explore from './components/Explore';
import BusExpansion from './components/BusExpansion';
import Insights from './components/Insights';
import Finance from './components/Finance';
import Hero from './components/Hero';

export default function Landing() {
  return (
    <>
      <main className="container">
        <Hero />
        <Finance />
        <Insights />
        <BusExpansion />
      </main>
      <Explore />
      <Feedback />
      <AboutUs />
      <ConnectWithUs />
    </>
  );
}
