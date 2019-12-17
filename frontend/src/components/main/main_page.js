import React from 'react';
import Navigation from './navigation'
import HeroSection from './hero_section'
import TechStackSection from './tech_stack'
import GithubSection from './github_section'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <HeroSection />
        <TechStackSection />
        {/* <GithubSection /> */}
      </div>
    );
  }
}

export default MainPage;