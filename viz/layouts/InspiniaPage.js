import React from "react"
import Head from "next/head"

/*
  commonPage에서 사용하는 bootstrap version이 맞지 않을 수도 있어서
  별도 layout component를 작성하였습니다.
*/

export default ({ title = "Fire EHR", children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="/static/font-awesome/css/font-awesome.css"
          rel="stylesheet"
        />

        <link
          href="/static/css/plugins/toastr/toastr.min.css"
          rel="stylesheet"
        />

        <link
          href="/static/js/plugins/gritter/jquery.gritter.css"
          rel="stylesheet"
        />

        <link href="/static/css/animate.css" rel="stylesheet" />
        <link href="/static/css/style.css" rel="stylesheet" />

        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <style>
          @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
        </style>
      </Head>

      {children}
    </div>
  )
}
