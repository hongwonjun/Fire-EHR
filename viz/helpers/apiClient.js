import axios from "axios"
import { HOSTNAME } from "./config"

export default class ApiClient {
  constructor({ endpoint, path }) {
    if (endpoint === undefined) {
      this.endpoint = HOSTNAME + "/" + path
    } else {
      this.endpoint = endpoint
    }
  }

  get = payload =>
    axios({
      url: this.endpoint,
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...this.headers
      },
      params: payload
    }).then(
      response => {
        return Promise.resolve({
          ...response
        })
      },
      error => {
        return Promise.reject({
          ...error
        })
      }
    )

  post = payload =>
    axios({
      url: this.endpoint,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...this.headers
      },
      data: payload
    }).then(
      response => {
        return Promise.resolve({
          ...response
        })
      },
      error => {
        return Promise.reject({
          error
        })
      }
    )

  del = payload =>
    axios({
      url: this.endpoint,
      method: "delete",
      headers: {
        ...this.headers
      },
      params: payload
    }).then(
      response => {
        return Promise.resolve({
          ...response
        })
      },
      error => {
        return Promise.reject({
          error
        })
      }
    )

  put = (id, payload) =>
    axios({
      url: this.endpoint + id,
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...this.headers
      },
      data: payload
    }).then(
      response => {
        return Promise.resolve({
          ...response
        })
      },
      error => {
        return Promise.reject({
          error
        })
      }
    )
}
