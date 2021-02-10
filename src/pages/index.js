import React from "react"
import Layout from "../components/layout"
import Breakouts from "../components/modules/Breakouts/Breakouts"
import Schedules from "../components/modules/Schedules/Schedules"

const IndexPage = () => (
  <Layout>
    <Breakouts />
    <Schedules />
  </Layout>
)

export default IndexPage
