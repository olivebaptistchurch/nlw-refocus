import React from 'react';
import BreakoutLink from '../BreakoutLink/BreakoutLink';
import StyledThreeColumns from './ThreeColumns.style';

const languages = {
  German: 'https://google.de',
  French: 'https://google.fr'
}

const ThreeColumns = () => {
  return (
    <StyledThreeColumns>
      <BreakoutLink
        message="Breakout Link 1"
        linkTo="https://zoom.us"
        languages={languages} />
      <BreakoutLink
        message="Breakout Link 2"
        linkTo="https://zoom.us"
        languages={languages} />
      <BreakoutLink
        message="Breakout Link 3"
        linkTo="https://zoom.us"
        languages={languages}
        centeredMobile />
    </StyledThreeColumns>
  );
};

export default ThreeColumns;