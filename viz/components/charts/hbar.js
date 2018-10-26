import React, { Component } from "react"
import { Chart } from "react-google-charts"

class HBarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options
        ? this.props.options
        : {
            isStacked: "percent",
            // height: 700,
            legend: { position: "none" },
            hAxis: {
              minValue: 0,
              ticks: [0, 0.3, 0.6, 0.9, 1]
            }
          },
      data: this.props.data
        ? this.props.data
        : [
            [
              "Cluster ID", // should be string
              "cluster1",
              "cluster2",
              "cluster3",
              "cluster4"
              // { role: "annotation" }
            ],
            ["2", 172548 + 46215, 131570 + 42608, 0, 0],
            ["3", 172548, 131570, 46215 + 42608, 0],
            ["4", 172548, 131570, 46215, 42608]
          ]
    }
    console.log(this.state.data)
  }

  renderHBarChart = () => {
    return (
      <Chart
        chartType="BarChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="BarChart"
        width="100%"
        height="500px"
        chartEvents={this.props.chartEvents}
        legend_toggle
      />
    )
  }

  render() {
    return <div>{this.renderHBarChart()}</div>
  }
}

export default HBarChart
