import React from 'react';
import SpeakerLineup from '../../molecules/SpeakerLineup/SpeakerLineup';
import ThreeColumns from '../../molecules/ThreeColumns/ThreeColumns';
import StyledBreakouts from './Breakouts.style';


const Breakouts = () => {
  return (
    <StyledBreakouts>
      <h3>Breakout Sessions</h3>
      <SpeakerLineup />
      <ThreeColumns />
    </StyledBreakouts>
  );
};

export default Breakouts;