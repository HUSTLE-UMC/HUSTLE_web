import styled from 'styled-components';
import FONT from '../../../styles/Font';
import Colors from '../../../styles/Color';

export const ButtonLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5rem;
`;

export const ButtonComponent = styled.div`
  width: 32.7rem;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NumberBtn = styled.div`
  font-size: 1.5rem;
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${Colors.Gray50};
  cursor: pointer;
`;

export const SelectedBtn = styled(NumberBtn)`
  font-weight: ${FONT.WEIGHT.BOLD};
`;

export const NavBtn = styled(NumberBtn)`
  font-size: ${FONT.SIZE.CAPTION};
`;
