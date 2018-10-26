import React from "react"
import {
  storiesOf
} from "@storybook/react"
import registerServiceWorker from "./registerServiceWorker" // support offline capabilities

// primitive charts
import TimelineChart from "../components/charts/timeline"
import ScatterChart from "../components/charts/scatter"
import HBarChart from "../components/charts/hbar"
import ColumnChart from "../components/charts/column"
import Histogram from "../components/charts/histogram"
import LineChart from "../components/charts/line"
import CalendarChart from "../components/charts/calendar"
import Table from "../components/charts/table"
import SankeyChart from "../components/charts/sankey"

// composite charts
import ClusterPanel from "../components/charts/cluster"

// You can import as many stories as you need.

registerServiceWorker()

// primitive charts
const storiesTimeline = storiesOf("Timeline", module)
storiesTimeline.add("medication", () => < TimelineChart / > )

const storiesScatter = storiesOf("Scatter", module)
storiesScatter.add("physical", () => < ScatterChart / > )

const storiesBar = storiesOf("Bar", module)
storiesBar.add("cluster", () => < HBarChart / > )

const storiesColumn = storiesOf("Column", module)
storiesColumn.add("age", () => < ColumnChart / > )

const storiesHist = storiesOf("Histograms", module)
storiesHist.add("histogram", () => < Histogram / > )

const storiesLine = storiesOf("Line", module)
storiesLine.add("silhouette", () => < LineChart / > )

const storiesCal = storiesOf("Calendar", module)
storiesCal.add("calendar", () => < CalendarChart / > )

const storiesSk = storiesOf("Sankey", module)
storiesSk.add("sankey", () => < SankeyChart / > )

const storiesTable = storiesOf("Table", module)
storiesTable.add("patients", () => < Table / > )
// composite charts
const storiesPanel = storiesOf("Panel", module)
storiesPanel.add("clusters", () => < ClusterPanel / > )