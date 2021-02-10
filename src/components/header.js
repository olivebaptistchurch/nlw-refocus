import React from "react"
import logo from "../images/nlw-logo.png"
import Button from "./atoms/Button/Button"

const Header = () => (
  <header>
    <div className="hero-text">
      <img src={logo} alt="Next Level Worship Logo" /><br />
      <h2>Welcome to</h2>
      <h1>Refocus</h1>
      <Button 
        message="Join Live" 
        linkTo="https://live.olivebaptist.org"
        big
        newWindow />
    </div>
  </header>
)

export default Header
