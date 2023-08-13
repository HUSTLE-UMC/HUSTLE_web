import styled from 'styled-components';
import FONT from '../../styles/Font';
import Colors from '../../styles/Color';

export const ButtonContainer = styled.button`
  display: flex;
  background-color: ${Colors.TrueWhite};
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  color: ${Colors.MainBlack};
`;

export const ButtonSmall = styled(ButtonContainer)`
  width: 11.6rem;
  height: 5.6rem;
  border: solid 0.1rem ${Colors.Gray20};
  font-size: ${FONT.SIZE.BODY1};
  font-weight: ${FONT.WEIGHT.REGULAR};
`;

export const ButtonBig = styled(ButtonContainer)`
  width: 24rem;
  height: 5.8rem;
  border: solid 0.1rem ${Colors.MainBlack};
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.BOLD};
`;
