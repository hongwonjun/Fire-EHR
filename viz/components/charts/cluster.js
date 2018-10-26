import React, { Component } from "react"
import CommonPage from "../../layouts/commonPage"
import ScatterChart from "./scatter"
import HBarChart from "./hbar"
import LineChart from "./line"

class ClusterPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hbarData: this.props.hbarData,
      scatterData: this.props.scatterData,
      clusterQuality: this.props.clusterQuality
    }
  }

  renderClusterPanel = () => {
    return (
      <div className="container-fluid ml-auto">
        <div className="row">
          <div className="col">
            <h4>Clustering Demo</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            Dataset:
            <select className="custom-select" defaultValue="1">
              <option value="1">ASAN(CV)</option>
              <option value="2">MIMIC3.0</option>
            </select>
          </div>
          <div className="col">
            Table:
            <select className="custom-select" defaultValue="1">
              <option value="1">Physicals</option>
              <option value="2">Labs</option>
              <option value="3">6min</option>
            </select>
          </div>
          <div className="col-6">
            Dimensionality Reduction Technique:
            <select className="custom-select" defaultValue="1">
              <option value="1">SpectralEmbedding</option>
              <option value="2">TSNE</option>
              <option value="3">PCA</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="customRange2">Number of clusters:</label>
            <input
              type="range"
              className="custom-range"
              min="2"
              max="20"
              defaultValue="10"
              id="customRange2"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div style={{ float: "left", width: "400px" }}>
              <HBarChart
                data={this.state.hbarData}
                chartEvents={this.props.chartEvents}
              />
            </div>
            <div style={{ display: "block", marginLeft: "400px" }}>
              <LineChart data={this.state.clusterQuality} />
            </div>
          </div>

          <div className="col-6">
            <ScatterChart data={this.state.scatterData} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    return <CommonPage>{this.renderClusterPanel()}</CommonPage>
  }
}

export default ClusterPanel
