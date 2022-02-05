import React from 'react';
import styled from 'styled-components';
import Checkbox from '../common/CheckBox';

const Grid = styled.div`
  width: 100%;
  gap: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const MeetingTime = ({ timeList, onToggle }) => {
  return (
    <>
      <Grid>
        {timeList && timeList.length > 0 ? (
          timeList.map((s) => (
            <Checkbox
              key={s.id}
              label={s.label}
              checked={s.checked}
              onToggle={() => onToggle(s.id)}
            />
          ))
        ) : (
          <div></div>
        )}
      </Grid>
    </>
  );
};

export default MeetingTime;
