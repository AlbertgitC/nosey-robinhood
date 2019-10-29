import React from 'react';
import { fetchCompanyDaily } from '../../actions/company_actions';
import CanvasJSReact from '../../assets/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { company: undefined, dataPoints: [] }
  }

  componentDidMount() {
    if (this.props.tag) {
      fetchCompanyDaily(this.props.tag).then(
        res => {
          this.updateData(Object.entries(res.data)[0]);
        }
      );
    } else {
      this.updateData();
    }    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ company: undefined, dataPoints: [] }, () => {
      if (nextProps.data) {
        this.updateData(nextProps.data);
      } else if (nextProps.tag) {
        fetchCompanyDaily(nextProps.tag).then(
          res => {
            this.updateData(Object.entries(res.data)[0]);
          }
        );
      }
    });
  }

  async updateData(props = this.props.data) {
    await this.setState({ company: props });
    if (this.state.company) {
      for (let i = 0; i < this.state.company[1].chart.length; i++) {
        this.setState({
          dataPoints: this.state.dataPoints.concat([{
            x: new Date(this.state.company[1].chart[i].date),
            y: this.state.company[1].chart[i].close
          }])
        });
      };
    }
  }

  render() {
    const options = {
      theme: "light2", // "light1", "dark1", "dark2"
      backgroundColor: null,
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
      return (<div>Sorry API limit reached :(</div>);
    } else if (this.props.tag) {
      return (
        <div>
          <div className="stock-graph">
            <h2 className='company-graph-title'>{this.state.company[0]}</h2>
            <h2 className='company-graph-price'>${this.state.company[1].quote.latestPrice.toFixed(2)}</h2>
            <CanvasJSChart options={options} />
          </div> 
        </div>
      );
    } else {
      return (
        <div className="stock-graph">
          <h2>{this.state.company[0]}</h2>
          <h2>${this.state.company[1].quote.latestPrice}</h2>
          <CanvasJSChart options={options} />
        </div>
      );
    }
    
  }

}

export default Companies;