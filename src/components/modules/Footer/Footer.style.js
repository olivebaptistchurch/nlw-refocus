import styled from "@emotion/styled";
import { theme } from "../../utilities/Theme";

const StyledFooter = styled.footer`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 2rem;
  text-transform: uppercase;

  text-align: center;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 3rem;

  p {
    width: 70%;
    margin: 0 auto;
  }

  a {
    color: ${theme.colors.secondary};
  }
`

export default StyledFooter