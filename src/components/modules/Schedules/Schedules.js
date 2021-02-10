import React from 'react';
import TwoColumnSchedule from '../../molecules/TwoColumnSchedule/TwoColumnSchedule';
import StyledSchedule from './Schedules.style';

const Schedules = () => {
  return (
    <StyledSchedule>
      <h3>Schedule of Events</h3>
      <TwoColumnSchedule />
    </StyledSchedule>
  );
};

export default Schedules;