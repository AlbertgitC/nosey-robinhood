import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { company: undefined, dataPoints: [] }
  }

  componentDidMount() {
    
    this.props.fetchCompanyDaily(this.props.tag).then(
      (res) => {
        this.setState({ company: res.company });
        
        for (let i = 0; i < 30; i++) {
          this.setState({
            dataPoints: this.state.dataPoints.concat([{
              x: new Date(this.state.company[i].Timestamp),
              y: this.state.company[i].Close
            }])
          });
        };        
        
      }
    );
  }

  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      title: {
        text: this.props.tag
      },
      axisY: {
        // title: "Bounce Rate",
        includeZero: false,
        suffix: "$"
      },
      axisX: {
        // title: "Week of Year",
        // prefix: "W",
        interval: 2
      },
      data: [{
        type: "line",
        toolTipContent: "{x}: {y} $",
        dataPoints: this.state.dataPoints
      }]
    }
    
    if (!this.state.company) {
      return null;
    } else {
            
      return (
        <div>
          <CanvasJSChart options={options} />
        </div>
      );
    }
    
  }

}

export default Companies;