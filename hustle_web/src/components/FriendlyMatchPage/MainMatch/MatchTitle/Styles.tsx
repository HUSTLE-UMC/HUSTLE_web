import styled from 'styled-components';
import Colors from '../../../../styles/Color';
import FONT from '../../../../styles/Font';

export const TitleContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.Gray20};
`;

export const IconBox = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3f37c9;
  border-radius: 50%;
`;

export const TextBox = styled.div`
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.Gray80};
`;
