import styled from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const Layout = styled.div`
  width: 100%;
  height: 12rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  padding: 2rem 5rem 0;
  border-bottom: 1px solid ${Colors.Gray20};
`;

export const Sport = styled.div`
  color: ${Colors.MainSemi};
  font-size: ${FONT.SIZE.CAPTION};
  font-weight: ${FONT.WEIGHT.REGULAR};
  margin-bottom: 0.2rem;
`;

export const Title = styled.div`
  color: ${Colors.MainBlack};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  margin-bottom: 0.2rem;
  cursor: pointer;
`;

export const Date = styled.div`
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${Colors.MainBlack};
  margin-bottom: 0.2rem;
`;

export const Location = styled.div`
  font-size: ${FONT.SIZE.CAPTION};
  font-weight: ${FONT.WEIGHT.LIGHT};
  color: ${Colors.Gray50};
  position: absolute;
  bottom: 1rem;
`;
