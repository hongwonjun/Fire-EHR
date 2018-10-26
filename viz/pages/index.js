import React from "react"
import ApiClient from "../helpers/apiClient"
import DemoPage from "../layouts/demoPage"
import LineChart from "../components/charts/line"

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount = () => {
    this.samplePatient()
  }

  samplePatient = () => {
    return new ApiClient({
      path: "Patient/1"
    })
      .get()
      .then(
        response => {
          console.log(response.data)
          return response
        },
        error => {
          return Promise.reject("Failed")
        }
      )
  }
  render() {
    return (
      <DemoPage url={this.props.url.pathname}>
        <div> Hello World </div>
      </DemoPage>
    )
  }
}

export default Demo
