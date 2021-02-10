import React from 'react';
import PropTypes from "prop-types"
import StyledButton from './Button.style'

const Button = ({ message, linkTo, big, light, newWindow }) => {
  return (
    <StyledButton 
      href={linkTo} 
      big={big ? big : null}
      light={light ? light : null} 
      target={newWindow ? `_blank` : null}>
        {message}
    </StyledButton>
  );
};

Button.propTypes = {
  message: PropTypes.string,
  linkTo: PropTypes.string,
  big: PropTypes.bool,
  light: PropTypes.bool,
  newWindow: PropTypes.bool,
}

export default Button;