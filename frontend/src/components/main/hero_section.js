import React from 'react';
import { Link } from "react-router-dom" 
import heroBanner from '../../assets/images/robinhood-hero-gif.mp4'


function HeroSection() {
  return (
    <section className="splash-hero-section">
      <h1 className="splash-hero-h1">Nosey Robinhood</h1>
      <h3 className="splash-hero-h3">Nosey Robinhood, a stock market simulation based on Robinhood, lets you invest in companies you love, with the money you don't have!</h3>
      <video autoPlay loop className="hero-banner-photo" src={heroBanner}></video>
      <Link className="signup-button-on-splash" to="/signup">Demo</Link>
    </section>
  );
}

export default HeroSection