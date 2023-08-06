import styled from 'styled-components';
import Colors from '../../styles/Color';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: orange;
`;

export const HotContainer = styled.div`
  width: 100%;
  height: 45rem;
  display: flex;
  margin-top: 3rem;
  margin-bottom: 3rem;
  flex-direction: column;
  background-color: ${Colors.Gray10};
`;

export const HotBox = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 4rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const MatchContainer = styled.div`
  width: 100%;
  height: 38rem;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 3rem;
  background-color: ${Colors.Gray10};
`;

export const ListBox = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1.5rem 0;
  padding: 0 10rem;
`;
