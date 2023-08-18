import styled from 'styled-components';
import FONT from '../../styles/Font';
import Colors from '../../styles/Color';

export const ButtonContainer = styled.div`
  display: flex;
  background-color: ${Colors.TrueWhite};
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  color: ${Colors.Gray50};
  border-bottom: solid 0.1rem ${Colors.Gray50};
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  
  &::after {
    color: ${Colors.WriteButton};
    pointer-events: none; 
  }

  &:active::after,
  &:hover::after {
  }

  &:active,
  &:hover {
    color: ${Colors.WriteButton};
    border-bottom: solid 0.1rem ${Colors.WriteButton};
  }

\` ;
`;

export const ButtonPre = styled(ButtonContainer)`
  width: 16rem;
  height: 6.2rem;
`;

export const ButtonFinal = styled(ButtonContainer)`
  width: 18.286rem;
  height: 6.2rem;
`;
