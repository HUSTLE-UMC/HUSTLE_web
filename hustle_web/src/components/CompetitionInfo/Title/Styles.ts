import styled from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const TitleContainer = styled.div`
  width: 110rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  border-bottom: 0.2rem solid ${Colors.MainBlack};
  background-color: white;
  margin-top: 3.6rem;
`;

export const TitleWrap = styled.div`
  width: 60rem;
  height: 6.8rem;
  margin-left: 1.6rem;
  margin-top: 2.1rem;
  display: flex;
  flex-direction: column;
`;

export const MainBox = styled.div`
  width: 60rem;
  height: 3.6rem;
  color: ${Colors.MainBlack};
  font-size: 3rem;
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
`;
export const SubBox = styled.div`
  width: auto;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
`;

export const SubLabel = styled.div`
  display: flex;
  width: 22rem;
  height: 2rem;
  align-items: center;
  justify-content: flex-start;
  color: ${Colors.Gray50};
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.REGULAR};
`;
