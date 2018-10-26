import React, { Component } from "react"
import { Chart } from "react-google-charts"

class LineChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options
        ? this.props.options
        : {
            curveType: "function",
            orientation: "vertical",
            legend: { position: "top" },
            vAxis: {
              baselineColor: "#fff",
              gridlineColor: "#fff",
              textPosition: "none"
            }
          },
      data: this.props.data
        ? this.props.data
        : [
            ["nCluster", "Silhouette"],
            ["2", 0.486151377463181],
            ["3", 0.6455738744532741],
            ["4", 0.6208537069609044],
            ["5", 0.5522900650564321],
            ["6", 0.535186347445203],
            ["7", 0.5229475297474302],
            ["8", 0.5086830683058234],
            ["9", 0.5049059154336629],
            ["10", 0.4917577362205098]
          ]
    }
  }

  renderLineChart = () => {
    return (
      <Chart
        chartType="LineChart"
        data={this.state.data}
        options={this.state.options}
        graph_id={this.props.id}
        width="100%"
        height="500px"
        chartEvents={this.props.chartEvents}
        legend_toggle
      />
    )
  }

  render() {
    return <div>{this.renderLineChart()}</div>
  }
}

export default LineChart
