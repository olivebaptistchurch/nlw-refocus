import styled from "@emotion/styled";
import { theme } from "./utilities/Theme"
import headerBackground from "../images/nlw-header-background.jpg"

const StyledLayout = styled.div`
  body {
    font-family: Helvetica, Arial, sans-serif;
    height: 100%;
  }

  header {
    background-image: linear-gradient(45deg, #f3e6e822 0%, #d5d0e577 74%), url(${headerBackground});
    height: 90vh;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    @media screen and (max-width: ${theme.screens.mobile}) {
      text-align: center;
    }
  }

  .hero-text {
    position: absolute;
    font-family: Helvetica, Arial, sans-serif;
    right: 20%;
    top: 10%;
    text-align: center;

    img {
      height: 225px;
    }

    h1, h2 {
      text-transform: uppercase
    }

    h1 {
      font-size: 5em;
      font-weight: 900;
      color: ${theme.colors.primary};
      margin: .1em 0;
    }
    
    h2 {
      font-size: 2.5em;
      font-weight: 900;
      color: ${theme.colors.white};
      margin: .1em 0;
    }

    @media screen and (max-width: ${theme.screens.tablet}) {
      position: relative;
      right: unset;
    }
  }

  main {
    font-family: Helvetica, Arial, sans-serif;
  }
`

export default StyledLayout;
