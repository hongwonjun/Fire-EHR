import React, { Component } from "react"
import { Chart } from "react-google-charts"

class PieChart extends Component {
  constructor(props) {
    super(props)
  }

  renderPieChart = () => {
    return (
      <Chart
        chartType="PieChart"
        data={this.props.data}
        options={this.props.options}
        graph_id={this.props.id}
        width={this.props.width}
        height={this.props.height}
        chartEvents={this.props.chartEvents}
        legend_toggle
      />
    )
  }

  render() {
    return <div>{this.renderPieChart()}</div>
  }
}

export default PieChart
