import React, { Fragment } from "react"
import Head from 'next/head'

//imports dependencies

import Home from "../components/Home/index";
//image from pexels | pixabas
const Index = () => {
  return (
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Poppins|Rubik&display=swap" rel="stylesheet" />
      </Head>
      <Home />
    </Fragment>)
}
export default Home
