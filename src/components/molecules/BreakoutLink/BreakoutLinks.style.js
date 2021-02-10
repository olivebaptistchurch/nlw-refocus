import styled from "@emotion/styled"
import { theme } from "../../utilities/Theme"

const StyledBreakoutLinks = styled.div`
  margin-bottom: 1.5rem;


  @media screen and (max-width: ${theme.screens.tablet}) {
    grid-column: ${props =>
      props.centeredMobile
        ? `1/3`
        : null};
  }

  @media screen and (max-width: ${theme.screens.mobile}) {
    grid-column: ${props =>
      props.centeredMobile
        ? `unset`
        : null};
  }

  p {
    margin: .75rem;
    text-transform: uppercase;
  }
`

export default StyledBreakoutLinks