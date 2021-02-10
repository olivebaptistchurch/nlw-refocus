import React from 'react';
import Links from '../../atoms/Links/Links';
import StyledFooter from './Footer.style';

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Refocus is Presented By&nbsp;
        <Links 
          message="NLW International, Inc." 
          linkTo="https://www.nextlevelworship.com" />
      </p>
    </StyledFooter>
  );
};

export default Footer;