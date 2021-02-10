import React from 'react';
import PropTypes from "prop-types"
import Button from '../../atoms/Button/Button';
import Languages from '../Languages/Languages';
import StyledBreakoutLinks from './BreakoutLinks.style';

const BreakoutLink = ({ message, linkTo, languages, centeredMobile }) => {
  return (
    <StyledBreakoutLinks centeredMobile={centeredMobile ? centeredMobile : null}>
      <Button 
        message={message} 
        linkTo={linkTo}
        light
        newWindow />
      <p>Watch in a different Language</p>
      <Languages languages={languages} />
    </StyledBreakoutLinks>
  );
};

BreakoutLink.propTypes = {
  message: PropTypes.string,
  linkTo: PropTypes.string,
  languages: PropTypes.object,
  centeredMobile: PropTypes.bool,
}

export default BreakoutLink;