import React from 'react';

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {companies: []}

    
  }

  componentDidMount() {
    this.props.fetchCompanyDaily('MSFT').then(
      (res) => {this.setState({ companies: this.state.companies.concat([res.company[0]])})}
    );
  }

  // companiesLis() {
  //   this.state.companies.map(
  //     (company, i) => {
  //       return (
  //         <li key={i}>
  //           <div>
  //             {company}
  //           </div>
  //         </li>
  //       );
  //     }
  //   );
  // }

  companyInfo() {

    return (
      <div>
        {/* <span>{String(this.state.companies[0].Timestamp)}</span> */}
        <span>Open: {this.state.companies[0].Open}</span>
        <br/>
        <span>High: {this.state.companies[0].High}</span>
        <br />
        <span>Low: {this.state.companies[0].Low}</span>
        <br />
        <span>Close: {this.state.companies[0].Close}</span>
        <br />
        <span>Volume: {this.state.companies[0].Volume}</span>
      </div>
    );
  }

  render() {
    
    if (!this.state.companies[0]) {
      return null;
    } else {
      console.log(this.state.companies[0])
      
      return (
        <div>
          {this.companyInfo()}
        </div>
      );
    }
    
  }

}

export default Companies;