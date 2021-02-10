import React from 'react';
import speakerLineup1 from "../../../images/speaker-lineup-1.jpg"
import speakerLineup2 from "../../../images/speaker-lineup-2.jpg"
import StyledSpeakerLineup from './SpeakerLineup.style';

const SpeakerLineup = () => {
  return (
    <StyledSpeakerLineup>
      <img src={speakerLineup1} alt="Speaker lineup for NLW conference" />
      <img src={speakerLineup2} className="bottom" alt="Speaker lineup for NLW conference" />
    </StyledSpeakerLineup>
  );
};

export default SpeakerLineup;