import styled from 'styled-components';
import FONT from '../../styles/Font';
import Colors from '../../styles/Color';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10rem;
  padding-right: 6rem;
  border-top: 1px solid ${Colors.Gray10};
  border-bottom: 1px solid ${Colors.Gray10};
  background: #fff;
`;

export const TitleLabel = styled.h2`
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.MainBlack};
`;

export const NavigateLabel = styled.h2`
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${Colors.Impact};
`;
