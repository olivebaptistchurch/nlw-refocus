import styled from "@emotion/styled";
import { theme } from "../../utilities/Theme";

const StyledSchedule = styled.div`
  text-align: center;
  padding: 3rem;

  h3 {
    text-transform: uppercase;
    color: ${theme.colors.primary};
    font-size: 5rem;
    font-weight: 700;

    @media screen and (max-width: ${theme.screens.tablet}) {
      font-size: 4rem;
    }

    @media screen and (max-width: ${theme.screens.mobile}) {
      font-size: 3rem;
    }
  }
`

export default StyledSchedule