import React from "react"
import ApiClient from "../helpers/apiClient"
import DemoPage from "../layouts/demoPage"
import Pagination from "../components/Pagination"
import LineChart from "../components/charts/line"

class Demo extends React.Component {
  static getInitialProps(ctx) {
    var apiClient = new ApiClient({
      path: "Patient/list"
    })

    var page = ctx.query.page ? parseInt(ctx.query.page) : 1
    var length = ctx.query.length ? parseInt(ctx.query.length) : 18

    return apiClient.get({ start: page - 1, length: length }).then(
      response => {
        return Promise.resolve({
          page: page,
          length: length,

          list: response.data.results,
          total: response.data.total
        })
      },
      error => {
        if (error.error.response.status === 400) {
          return Promise.resolve({
            error: 400
          })
        }
        console.log("GET FAILED")
        return Promise.reject("Failed")
      }
    )
  }

  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount = () => {
    
  }

  render() {
    return (
      <DemoPage url={this.props.url.pathname}>
        <div className="container-fluid">
          <div className="row" style={{ marginTop: "5px" }}>
            <div className="col-lg-12">
              <div className="ibox">
                <div className="ibox-title">
                  <h3>
                    Patient List
                  </h3>
                </div>
                <div className="ibox-content">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="table-responsive">
                          <table className="table table-striped">
                            <colgroup>
                              <col width="30%" />
                              <col width="30%" />
                              <col width="10%" />
                              <col width="10%" />
                              <col width="20%" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>Patient ID</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>BirthDate</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.props.list.map((info, idx) => {
                                return (
                                  <tr key={idx}>
                                    <td>{info.id}</td>
                                    <td>{info.name[0].family}</td>
                                    <td>{info.gender}</td>
                                    <td>{info.birthDate}</td>
                                    <td>
                                      <a
                                        type="button"
                                        className="btn btn-primary"
                                        href=""
                                      >
                                        Timeline
                                      </a>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="text-center">
                            <Pagination
                              currentIndex={this.props.page}
                              totalItems={this.props.total}
                              pageLink={
                                this.props.url.pathname +
                                "?length=" +
                                this.props.length +
                                "&page="
                              }
                              itemsPerPage={this.props.length}
                              showPagesCount={10}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DemoPage>
    )
  }
}

export default Demo
