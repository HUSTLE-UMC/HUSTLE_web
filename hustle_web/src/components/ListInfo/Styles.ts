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
  border-top: 1px solid ${Colors.Gray10};
  border-bottom: 1px solid ${Colors.Gray10};
  background: #fff;
`;

export const TitleLabel = styled.h2`
  margin-left: 6rem;
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.MainBlack};
`;

export const NavigateLabel = styled.h2`
  margin-right: 6rem;
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${Colors.Impact};
`;
