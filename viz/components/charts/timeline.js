import React, { Component } from "react"
import { Chart } from "react-google-charts"

class TimelineChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options ? this.props.options : {},
      data: this.props.data
        ? this.props.data
        : [
            [
              { id: "EVENT_TYPE", type: "string" },
              { id: "IOFL", type: "string" },
              { id: "Start", type: "date" },
              { id: "End", type: "date" }
            ],
            ["Visit", "O", new Date(1789, 3, 30), new Date(1797, 2, 4)],
            ["Visit", "I", new Date(1797, 2, 4), new Date(1801, 2, 4)],
            ["Visit", "E", new Date(1801, 2, 4), new Date(1809, 2, 4)],
            ["Diagnosis", "I", new Date(1801, 2, 4), new Date(1809, 2, 4)],
            ["Producre", "O", new Date(1789, 3, 30), new Date(1797, 2, 4)],
            ["Producre", "I", new Date(1797, 2, 4), new Date(1801, 2, 4)],
            ["Producre", "E", new Date(1801, 2, 4), new Date(1809, 2, 4)],
            ["Medication", "O", new Date(1789, 3, 30), new Date(1797, 2, 4)],
            ["Medication", "I", new Date(1797, 2, 4), new Date(1801, 2, 4)],
            ["Medication", "E", new Date(1801, 2, 4), new Date(1809, 2, 4)]
          ],
      chartPackages: ["timeline"]
    }
  }

  renderTimelineChart = () => {
    return (
      <Chart
        chartType="Timeline"
        data={this.state.data}
        options={this.state.options}
        graph_id={this.props.id}
        width={this.props.width ? this.props.width : "100%"}
        height={this.props.height ? this.props.height : "400px"}
        chartEvents={this.chartEvents}
        chartPackages={this.state.chartPackages}
      />
    )
  }

  renderNoData = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "400px"
        }}
      >
        데이터가 없습니다.
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.data && this.state.data.length > 0
          ? this.renderTimelineChart()
          : this.renderNoData()}
      </div>
    )
  }
}

export default TimelineChart
