import React from "react";
import styled from "styled-components";
import RadioButton from "../common/RadioButton";

const Grid = styled.div`
  gap: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3rem;
`;

const Part = styled.div`
  display: flex;
  flex-direction: row;
  width: 25rem;
`;

const Text = styled.div`
  margin-left: 3rem;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const application_list = [
  "인턴개발자 - 프론트엔드",
  "리드개발자 - 프론트엔드",
  "인턴개발자 - 백엔드",
  "리드개발자 - 백엔드",
  "인턴개발자 - 프론트 & 백",
];

const DeveloperPart = ({ part, onClickPart }) => {
  return (
    <Grid>
      <Part>
        <RadioButton
          checked={part === 1}
          onClick={() => {
            onClickPart(1);
          }}
        />
        <Text>인턴개발자 - 프론트엔드</Text>
      </Part>
      <Part>
        <RadioButton
          checked={part === 2}
          onClick={() => {
            onClickPart(2);
          }}
        />
        <Text>리드개발자 - 프론트엔드</Text>
      </Part>
      <Part>
        <RadioButton
          checked={part === 3}
          onClick={() => {
            onClickPart(3);
          }}
        />
        <Text>인턴개발자 - 백엔드</Text>
      </Part>
      <Part>
        <RadioButton
          checked={part === 4}
          onClick={() => {
            onClickPart(4);
          }}
        />
        <Text>리드개발자 - 백엔드</Text>
      </Part>
      <Part>
        <RadioButton
          checked={part === 5}
          onClick={() => {
            onClickPart(5);
          }}
        />
        <Text>인턴개발자 - 프론트 & 백</Text>
      </Part>
    </Grid>
  );
};

export default DeveloperPart;
