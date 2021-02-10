import styled from "@emotion/styled";
import { theme } from "../../utilities/Theme";

const StyledSpeakerLineup = styled.div`
  img {
      width: 35%;
      margin: 0;
      padding: 0;
    }


  @media screen and (max-width: ${theme.screens.tablet}) {
    img {
      width: 70%;
      margin: 0;
      padding: 0;

      &.bottom {
        position: relative;
        top: -5px;
      }
    }
  }

  @media screen and (max-width: ${theme.screens.mobile}) {
    img {
      width: 95%;
      margin: 0;
      padding: 0;

      &.bottom {
        position: relative;
        top: -5px;
      }
    }
  }
`

export default StyledSpeakerLineup