import React from 'react';
import { Link } from "react-router-dom" 
import heroBanner from '../../assets/images/robinhood-hero-gif.mp4'


function HeroSection() {
  return (
    <section className="splash-hero-section">
      <h1 className="splash-hero-h1">A Robinhood Clone</h1>
      <h3 className="splash-hero-h3">Robinhood, a pioneer of commission-free investing, gives you access to investing and more ways to make your money work harder.</h3>
      <video autoPlay loop className="hero-banner-photo" src={heroBanner}></video>
      <Link className="signup-button-on-splash" to="/signup">Demo</Link>
    </section>
  );
}

export default HeroSection