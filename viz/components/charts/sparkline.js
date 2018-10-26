import React, { Component } from "react"
import {
  Sparkline,
  LineSeries,
  HorizontalReferenceLine,
  BandLine,
  PatternLines,
  PointSeries
} from "@data-ui/sparkline"
import _ from "lodash"
import { allColors } from "@data-ui/theme" // open-color colors

class SparkLineChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title ? this.props.data : "Scores",
      avg: this.props.data
        ? _.mean(this.props.data)
        : _.mean([28, 26, 27, 25, 24, 30, 32, 29]),
      options: this.props.options
        ? this.props.options
        : {
            range: [22, 29]
          },
      data: this.props.data ? this.props.data : [28, 26, 27, 25, 24, 30, 32, 29]
    }
  }

  renderSparkLine() {
    return (
      <Sparkline
        ariaLabel=""
        margin={{ top: 24, right: 64, bottom: 24, left: 70 }}
        width={400}
        height={80}
        data={this.state.data}
        valueAccessor={datum => datum}
      >
        {/* this creates a <defs> referenced for fill */}
        <PatternLines
          id="unique_pattern_id"
          height={6}
          width={6}
          stroke={allColors.red[6]}
          strokeWidth={1}
          orientation={["diagonal"]}
        />
        {/* display innerquartiles of the data */}
        <BandLine
          band={{
            from: { x: 0, y: this.state.options.range[0] },
            to: {
              x: this.state.data.length - 1,
              y: this.state.options.range[1]
            }
          }}
          fill="url(#unique_pattern_id)"
        />
        {/* display the median */}
        <HorizontalReferenceLine
          stroke={allColors.red[8]}
          strokeWidth={1}
          strokeDasharray="4 4"
          reference={this.state.avg}
        />
        {/* Series children are passed the data from the parent Sparkline */}
        <LineSeries showArea={false} stroke={allColors.red[7]} />
        <PointSeries
          points={["min", "max"]}
          fill={allColors.red[3]}
          size={5}
          stroke="#fff"
          renderLabel={val => val.toFixed(2)}
        />
      </Sparkline>
    )
  }
  render() {
    return <div>{this.renderSparkLine()}</div>
  }
}

export default SparkLineChart
