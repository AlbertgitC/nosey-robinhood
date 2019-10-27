import React from 'react';
import GithubLogo from '../../assets/images/GitHub-Mark-Light-120px-plus.png'
import GithubCard from './github_card'
import GithubHeader from './github_header'


function GithubSection() {
  return (
    <section className="splash-portfolio-section">
      <GithubHeader />
      <GithubCard name={"Zach Williams"} url={"https://github.com/ZacharyCWilliams"}/>
      <GithubCard name={"Albert Cheng"} url={"https://github.com/AlbertgitC"} />
      <GithubCard name={"Jasim Atiyeh"} url={"https://github.com/JasimAtiyeh"} />
    </section>
  );
}

export default GithubSection