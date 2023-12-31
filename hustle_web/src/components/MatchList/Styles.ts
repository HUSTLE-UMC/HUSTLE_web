import styled from 'styled-components';
import FONT from '../../styles/Font';
import Colors from '../../styles/Color';

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 120rem;
  height: 112rem;
`;

export const MatchItem = styled.li`
  display: flex;
  align-items: center;
  border: 0.1rem solid ${Colors.Gray20};
  //padding: 10px;
`;

export const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.6rem;
  height: 14rem;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.2rem;
  height: 14rem;
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.BOLD};
  font-family: Pretendard;
`;

export const PeriodWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.4rem;
  height: 14rem;
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  font-family: Pretendard;
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 14rem;
`;
