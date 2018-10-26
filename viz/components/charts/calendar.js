import React, { Component } from "react"
import { Chart } from "react-google-charts"

class CalendarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options ? this.props.options : {},
      data: this.props.data
        ? this.props.data
        : [
            [{ id: "Date", type: "date" }, { id: "Won/Loss", type: "number" }],
            [new Date(2012, 3, 13), 37032],
            [new Date(2012, 3, 14), 38024],
            [new Date(2012, 3, 15), 38024],
            [new Date(2012, 3, 16), 38108],
            [new Date(2012, 3, 17), 38229],
            // Many rows omitted for brevity.
            [new Date(2013, 9, 4), 38177],
            [new Date(2013, 9, 5), 38705],
            [new Date(2013, 9, 12), 38210],
            [new Date(2013, 9, 13), 38029],
            [new Date(2013, 9, 19), 38823],
            [new Date(2013, 9, 23), 38345],
            [new Date(2013, 9, 24), 38436],
            [new Date(2013, 9, 30), 38447]
          ],
      chartPackages: ["calendar"]
    }
  }

  renderCalendarChart = () => {
    return (
      <Chart
        chartType="Calendar"
        data={this.state.data}
        options={this.state.options}
        graph_id={this.props.id}
        width={"100%"}
        height={"350px"}
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
          ? this.renderCalendarChart()
          : this.renderNoData()}
      </div>
    )
  }
}

export default CalendarChart
