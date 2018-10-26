import InspiniaPage from "./InspiniaPage"
import NavigationBar from "../components/NavigationBar"

export default class DemoPage extends React.Component {
  render() {
    const { title, url } = this.props
    return (
      <InspiniaPage title={title ? title + " - DHH Demo" : "DHH Demo"}>
        <NavigationBar pathname={url} />
        <div style={{ minHeight: "calc(100vh - 111px)" }}>
          {this.props.children}
        </div>
        <div className="footer">
          <div>
            <strong>Copyright</strong> Fire-EHR Team © 2018
          </div>
        </div>
      </InspiniaPage>
    )
  }
}
