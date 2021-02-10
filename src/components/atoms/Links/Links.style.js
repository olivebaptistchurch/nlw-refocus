import styled from "@emotion/styled";
import { theme } from "../../utilities/Theme";

const StyledLinks = styled.a`
  color: ${theme.colors.white};
  margin: 0 .2rem;
  transition: 0.3s;
  text-transform: uppercase;

  :hover {
    font-weight: 700;
  }
`

export default StyledLinks