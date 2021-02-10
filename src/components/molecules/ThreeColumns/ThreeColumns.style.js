import styled from "@emotion/styled";
import { theme } from "../../utilities/Theme";

const StyledThreeColumns = styled.div`
  
  width:80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: ${theme.screens.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${theme.screens.mobile}) {
    grid-template-columns: 1fr;
  }
`

export default StyledThreeColumns;