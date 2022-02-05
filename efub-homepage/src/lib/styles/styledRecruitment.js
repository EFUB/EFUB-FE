import styled from 'styled-components';

export const Main = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BannerBlock = styled.div`
  width: 100%;
  position: relative;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

export const Subtitle = styled.div`
  font-size: 1.25rem;
  font-family: Roboto;
  margin-bottom: 1.5rem;
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  justify-content: space-between;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 13rem;
  justify-content: space-between;
`;

export const Text = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2rem;
`;

export const Line = styled.div`
  margin-top: 8rem;
  margin-bottom: 8rem;
  background-color: white;
  height: 1px;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Question = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  margin-top: 6rem;
`;
