import React from 'react';
import { Link } from "react-router-dom" 
import heroBanner from '../../assets/images/robinhood-hero-gif.mp4'


function HeroSection() {
  return (
    <section className="splash-hero-section">
        <article className="splash-hero-article">
          <div className="left-hero-div">
            <h1 className="splash-hero-h1">Nosey Robinhood</h1>
            <h3 className="splash-hero-h3">Nosey Robinhood, a stock market simulation based off Robinhood, lets you invest in companies you love, with the money you don't have!</h3>
            <video autoPlay loop className="hero-banner-photo" src={heroBanner}></video>
            <Link className="signup-button-on-splash" to="/signup">Demo</Link>
          </div>
          <div className="right-hero-div">
            <img className="main-hero-img" src="https://www.onlygfx.com/wp-content/uploads/2018/04/horse-archer-silhouette-3.png"></img>
          </div>
      </article>
    </section>
  );
}

export default HeroSection