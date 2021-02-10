import styled from '@emotion/styled'
import { theme } from '../../utilities/Theme'

const StyledButton = styled.a`
  background: ${props => 
    props.light 
      ? theme.colors.white 
      : theme.colors.primary};
  color: ${props =>
    props.light
      ? theme.colors.primary
      : theme.colors.white};

  font-family: Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  font-size: ${props =>
    props.big
    ? `2.5rem`
    : `1.5rem`};
  
  display: inline-block;
  padding: .75rem 1.2rem;
  border-radius: 10px;
  transition: background 0.2s ease-in-out;

  :hover {
    background: ${props =>
      props.light
        ? theme.colors.primary
        : theme.colors.white};
    color: ${props =>
      props.light
        ? theme.colors.white
        : theme.colors.primary};
    border: ${props =>
      props.light
        ? `3px solid ${theme.colors.white}`
        : ``};
    padding: ${props =>
      props.light
        ? `calc(.75rem - 3px) calc(1.2rem - 3px)`
        : ``};
  }
`

export default StyledButton;