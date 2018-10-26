import React, { Component } from "react"
import { Chart } from "react-google-charts"

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options
        ? this.props.options
        : {
            showRowNumber: true,
            width: "100%",
            height: "100%"
          },
      data: this.props.data
        ? this.props.data
        : [
            ["Name", "Gender", "Day of Birth"],
            ["Jim", "M", new Date("Wed, 13 Mar 2075 00:00:00 GMT")],
            ["Alice", "F", new Date("Sat, 26 Nov 2089 00:00:00 GMT")],
            ["Susan", "F", new Date("Wed, 15 Mar 2090 00:00:00 GMT")],
            ["Bob", "M", new Date("Thu, 27 Dec 2164 00:00:00 GMT")]
          ]
    }
  }

  renderTable = () => {
    return (
      <Chart
        chartType="Table"
        data={this.state.data}
        options={this.state.options}
        graph_id={this.props.id ? this.props.id : "Table"}
        chartEvents={this.props.chartEvents}
        legend_toggle
      />
    )
  }

  render() {
    return <div>{this.renderTable()}</div>
  }
}

export default Table
