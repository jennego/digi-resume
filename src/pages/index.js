import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';

import Plx from "../components/plx"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="main">
    <SEO title="Home" />
    <Plx></Plx>
 
  </div>
)

export default IndexPage
