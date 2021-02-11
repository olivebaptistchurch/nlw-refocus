/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import 'reset-css';
import Header from "./header"
import StyledLayout from "./layout.style";
import Footer from "./modules/Footer/Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Helmet title="Refocus Conference" />
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
