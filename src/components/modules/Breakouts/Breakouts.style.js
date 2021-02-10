import styled from "@emotion/styled";
import { theme } from "../../utilities/Theme";

const StyledBreakouts = styled.div`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 3rem 0;
  text-align: center;
  position: relative;

  h3 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 5rem;
    margin-bottom: 2rem;

    @media screen and (max-width: ${theme.screens.tablet}) {
      font-size: 4rem;
    }

    @media screen and (max-width: ${theme.screens.mobile}) {
      font-size: 3rem;
    }
  }
`

export default StyledBreakouts;