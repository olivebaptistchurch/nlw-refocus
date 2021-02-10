import styled from "@emotion/styled";
import { theme } from "../../utilities/Theme";

const StyledTwoColumnSchedule = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;

  @media screen and (max-width: ${theme.screens.mobile}) {
    grid-template-columns: 1fr;
  }

  .sessionTitle {
    color: ${theme.colors.primary};
    font-weight: 700;
    font-size: 3rem;
    text-transform: uppercase;

    text-align: right;
    margin-top: 3rem;
    padding: 3rem 3rem;
    border-right: 5px solid ${theme.colors.primary};

    @media screen and (max-width: ${theme.screens.tablet}) {
      padding-left: 0;
      font-size: 2.75rem;
    }

    @media screen and (max-width: ${theme.screens.mobile}) {
      padding: 0;
      border-right: none;
      text-align: left;
      border-bottom: 5px solid ${theme.colors.primary};
      padding-bottom: 1rem;
      font-weight: 500;
      font-size: 2.25rem;
    }
  }

  .sessionSchedule {
    color: ${theme.colors.primary};
    font-size: 1.2rem;
    text-align: left;
    padding: 2rem 25rem 1rem 3rem;
    margin-top: 3rem;

    @media screen and (max-width: ${theme.screens.desktopLg}) {
      padding-right: 15rem;
    }

     @media screen and (max-width: ${theme.screens.desktopMd}) {
      padding-right: 10rem;
    }

    @media screen and (max-width: ${theme.screens.tablet}) {
      padding-right: 0;
    }

    @media screen and (max-width: ${theme.screens.mobile}) {
      padding: 0;
      padding-left: 1.5rem;
      margin: 1.5rem 0;
    }
  }
`

export default StyledTwoColumnSchedule