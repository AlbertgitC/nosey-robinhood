import React from 'react'
import ReactLogo from '../../assets/images/react-icon.svg.png'

class TechStackCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="stack-item">
        <span className="left-column-stack">
          <h3 className="stack-item-h3">{this.props.language}</h3>
          <p className="stack-item-p">{this.props.description}</p>
          <p className="stack-item-type">{this.props.type}</p>
        </span>
        <img className="logo-splash-item" src={this.props.logo} alt="react logo"></img>
      </div>
    )
  }
}

export default TechStackCard