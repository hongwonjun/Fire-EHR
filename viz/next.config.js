const withCSS = require("@zeit/next-css")

module.exports = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.(svg|png|jpg)$/,
      loader: "file-loader"
    })
    return config
  }
})
