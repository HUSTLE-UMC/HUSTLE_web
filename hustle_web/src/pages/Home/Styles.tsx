import styled from 'styled-components';
import Colors from '../../styles/Color';
import FONT from '../../styles/Font';

export const HomeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RankContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  background-color: ${Colors.Gray10};
`;

export const HotContainer = styled.div`
  width: 100%;
  height: 45rem;
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  background-color: ${Colors.Gray10};
`;

export const HotBox = styled.div`
  margin: 2rem;
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 4rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  overflow: hidden;
`;

export const MatchContainer = styled.div`
  width: 100%;
  height: 41rem;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 3rem;
  background-color: ${Colors.Gray10};
`;

export const ListBox = styled.div`
  width: 100%;
  height: 41rem;
  overflow: hidden;
`;

export const TextBox = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  font-size: ${FONT.SIZE.BODY3};
  color: ${Colors.Gray80};
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const List = styled.div`
  display: flex;
  padding: 10px;
  width: 862px;
`;

export const sub1 = styled.span`
  width: auto;
  margin: 2.5px 0;
  font-size: 15px;
  color: #000;
  flex: 9;
  text-align: left;
`;

export const sub2 = styled.span`
  width: 5.5%;
  margin: 5.5px 0;
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: #000;
  margin-left: 1.5rem;
`;
