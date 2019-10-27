import React from 'react'
import GithubLogo from '../../assets/images/GitHub-Mark-Light-120px-plus.png'

class GithubCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <span>
        <a className="link-out-link-out" target="_blank" href={this.props.url}>
          <div className="stack-item github-stack github-stack-tablet-card">
            <span className="github-span-container">
              <h1 className="github-h1">
                {this.props.name}
              </h1>
                <img className="github-logo" src={GithubLogo}></img>
            </span>
          </div>
        </a>
      </span>
    )
  }
}

export default GithubCard
