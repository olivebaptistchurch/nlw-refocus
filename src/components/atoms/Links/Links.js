import React from 'react';
import PropTypes from "prop-types"
import StyledLinks from './Links.style';

const Links = ({ message, linkTo, newWindow }) => {
  return (
    <StyledLinks href={linkTo} target={newWindow ? "_blank" : null}>
      {message}
    </StyledLinks>
  );
};

Links.propTypes = {
  message: PropTypes.string,
  linkTo: PropTypes.string,
  newWindow: PropTypes.bool
}

export default Links;