import React from 'react';
import Navigation from './navigation'
import HeroSection from './hero_section'
import TechStackSection from './tech_stack'
import GithubSection from './github_section'
import TechnicalThoughts from './technical_thoughts'
import Crypto from './crypto'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <HeroSection />
        <TechStackSection />
        <TechnicalThoughts />
        <GithubSection />
        <Crypto />
      </div>
    );
  }
}

export default MainPage;