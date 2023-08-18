import styled from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const ContentContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: auto;
  height: 46rem;
  border-bottom: 0.1rem solid ${Colors.MainBlack};
  background-color: white;
`;

export const ContentItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  //justify-content: center;
  width: 13.4rem;
  height: 3rem;
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.MainBlack};
  font-family: Pretendard;
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  //justify-content: center;
  width: auto;
  height: 3rem;
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.REGULAR};
  font-family: Pretendard;
  color: ${Colors.Gray80};
`;
