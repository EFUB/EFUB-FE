import styled from 'styled-components';
import palette from './palette';

export const TitleText = styled.div`
  color: ${(props) => (props.green ? palette.green : 'white')};
  font-size: 48px;
  font-family: ${(props) => (props.eng ? 'Montserrat' : 'Roboto')};
  font-weight: bold;
  @media (max-width: 1023px) {
    font-size: 1.8rem;
    line-height: 160%;
  }
`;

export const Text = styled.div`
  color: white;
  font-size: 20px;
  font-family: 'Roboto';
  line-height: 180%;
  @media (max-width: 1023px) {
    font-size: 1rem;
  }
`;
