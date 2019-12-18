import React from 'react';
import GithubLogo from '../../assets/images/GitHub-Mark-Light-120px-plus.png'
import GithubCard from './github_card'
import GithubHeader from './github_header'


function GithubSection() {
  return (
    <section className="splash-portfolio-section">
      <article className="vector-image-article">
        <img className="stock-vector-image" src="https://www.freeiconspng.com/uploads/stock-exchange-icon-png-1.png"></img>
      </article>
      <article className="manage-portfolio-text-article">
        <h1 className="manage-your-portfolio">Hone Your Trading Skills</h1>
        <p className="manage-your-portfolio-p">Our goal is to reduce the risk one takes when investing in financial markets by providing a safe paper-money trading training envionrment.</p>
      </article>
    </section>
  );
}

export default GithubSection