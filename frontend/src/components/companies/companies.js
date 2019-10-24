import React from 'react';
import axios from 'axios';
import CanvasJSReact from '../../assets/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const alphaVantageKey = require("../../keys").alphaVantageKey;

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { company: undefined, dataPoints: [] }
  }

  fetchCompanyDaily(tag) {
    return axios.get("https://www.alphavantage.co/query",
      { params: {
        function: 'TIME_SERIES_DAILY',
        symbol: tag,
        apikey: alphaVantageKey
      } }
    )
  }

  componentDidMount() {
    this.fetchCompanyDaily(this.props.tag).then(
      res => {
        this.setState({ company: Object.entries(res.data["Time Series (Daily)"]) });
        for (let i = 0; i < 30; i++) {
          this.setState({
            dataPoints: this.state.dataPoints.concat([{
              x: new Date(this.state.company[i][0]),
              y: parseFloat(this.state.company[i][1]["4. close"])
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
        content: "<span style='\"'color: black;'\"'>{x}</span>: <span style='\"'color: #21CE99;'\"'>{y}</span>",
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
      console.log(this.state.dataPoints);
      return (
        <div className={this.props.classname}>
          <h2>{this.props.tag}</h2>
          <h2>${parseFloat(this.state.company[0][1]["4. close"]).toFixed(2)}</h2>
          <CanvasJSChart options={options} />
        </div>        
      );
    }
    
  }

}

export default Companies;