import styled from "@emotion/styled";
import { theme } from "../../utilities/Theme";

const StyledTwoColumnSchedule = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;

  .sessionTitle {
    color: ${theme.colors.primary};
    font-weight: 700;
    font-size: 3rem;
    text-transform: uppercase;

    text-align: right;
    margin-top: 3rem;
    padding: 3rem 3rem;
    border-right: 5px solid ${theme.colors.primary};
  }

  .sessionSchedule {
    color: ${theme.colors.primary};
    font-size: 1.2rem;
    text-align: left;
    padding: 2rem 3rem 1rem 3rem;
    margin-top: 3rem;
  }
`

export default StyledTwoColumnSchedule