import React from 'react';
import GithubLogo from '../../assets/images/GitHub-Mark-120px-plus.png';
import LinkedInLogo from '../../assets/images/LI-In-Bug.png';
import '../../assets/footer.css';

function Footer() {
  return (
    
    <div className="footer">
      <p className="footer-title">Creators</p>
      <div className="footer-tiles">
        <div className="footer-tile">
          <h1 className="footer-tile-name">
            Albert Cheng
          </h1>
          <div className="footer-tile-links">
            <a className="footer-tile-link" href="https://github.com/AlbertgitC">
              <img className="footer-tile-logo" src={GithubLogo}></img>
            </a>
            <a className="footer-tile-link" href="https://www.linkedin.com/in/albert-yue-hsi-cheng-6486b4197?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BM6yO28%2FfSBOQwdVtyhab%2Fw%3D%3D">
              <img id="linkedin" className="footer-tile-logo" src={LinkedInLogo}></img>
            </a>
          </div>
        </div>
        <div className="footer-tile">
          <h1 className="footer-tile-name">
            Jasim Atiyeh
          </h1>
          <div className="footer-tile-links">
            <a className="footer-tile-link" href="https://github.com/JasimAtiyeh">
              <img className="footer-tile-logo" src={GithubLogo}></img>
            </a>
            <a className="footer-tile-link" href="https://www.linkedin.com/in/jasim-atiyeh-a0281a5a">
              <img id="linkedin" className="footer-tile-logo" src={LinkedInLogo}></img>
            </a>
          </div>
        </div>
        <div className="footer-tile">
          <h1 className="footer-tile-name">
            Zachary Williams
          </h1>
          <div className="footer-tile-links">
            <a className="footer-tile-link" href="https://github.com/ZacharyCWilliams">
              <img className="footer-tile-logo" src={GithubLogo}></img>
            </a>
            <a className="footer-tile-link" href="https://www.linkedin.com/in/zachary-currell-williams">
              <img id="linkedin" className="footer-tile-logo" src={LinkedInLogo}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer