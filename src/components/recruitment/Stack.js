import React from 'react';
import styled from 'styled-components';
import Checkbox from '../common/CheckBox';

const Grid = styled.div`
  width: 100%;
  gap: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Stack = ({ stackList, onToggle }) => {
  return (
    <>
      <Grid>
        {stackList && stackList.length > 0 ? (
          stackList.map((s) => (
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

export default Stack;
