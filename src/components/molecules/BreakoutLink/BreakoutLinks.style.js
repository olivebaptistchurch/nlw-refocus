import styled from "@emotion/styled"

const StyledBreakoutLinks = styled.div`
  margin-bottom: 1.5rem;

  grid-column: ${props =>
      props.centeredMobile
        ? `1/3`
        : null};

  p {
    margin: .75rem;
    text-transform: uppercase;
  }
`

export default StyledBreakoutLinks