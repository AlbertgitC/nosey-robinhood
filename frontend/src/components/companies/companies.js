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
      theme: "light2", // "light1", "dark1", "dark2"
      axisY: {
        valueFormatString: " ",
        yValueFormatString: "$####.00",
        includeZero: false,
        gridThickness: 0,
        tickLength: 0
      },
      axisX: {
        valueFormatString: " ",
        tickLength: 0,
        crosshair: {
          enabled: true,
          lineDashType: "solid",
          thickness: 2
        }
      },
      toolTip: {
        enabled: true,
        content: "<span style='\"'color: black;'\"'>{x}</span>: <span style='\"'color: #21CE99;'\"'>{y} $</span>",
      },
      data: [{
        type: "spline",
        markerType: "none",
        lineColor: "#21CE99",
        yValueFormatString: "$####.00",
        dataPoints: this.state.dataPoints
      }]
    }
    
    if (!this.state.company) {
      return null;
    } else {
            
      return (
        <div className={this.props.classname}>
          <h2>{this.props.tag}</h2>
          <h2>{this.state.company[0].Close.toFixed(2)}</h2>
          <CanvasJSChart options={options} />
        </div>        
      );
    }
    
  }

}

export default Companies;