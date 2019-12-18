import React from 'react';

function TechnicalThoughts() {
  return (
    <div>
      <section className="technical-thoughts-section">
        <article className="techical-thoughts-article">
          <div className="technical-div" id="first-technical-div">
            <h1 className="technical-t-h1">Responsive Design</h1>
            <p className="technical-t-p">Implemented a responsive design which lets users access our clean user interface across all screen sizes.</p>
          </div>
          <div className="technical-div">
            <h1 className="technical-t-h1">Third Party APIs</h1>
            <p className="technical-t-p">Leveraged a third party stock exchange API in order to display up to date company information and stock pricing.</p>
          </div>
          <div className="technical-div">
            <h1 className="technical-t-h1">JSON Web Token</h1>
            <p className="technical-t-p">Constructed User Auth by sending encrypted user data via Axios HTTP requests. Integrated JSON Webtoken library.</p>
          </div>
          <div>
          <img className="tracking-software-image" src="https://images.ctfassets.net/czwjnyf8a9ri/4CW03Vvzt5TqL3W5CYPlMW/c626eced0cc00b8ca6046e5eae821697/vector-sauce-performance-hero_2x.png"></img>
          </div>
        </article>
      </section>
    </div>
  );
}

export default TechnicalThoughts




