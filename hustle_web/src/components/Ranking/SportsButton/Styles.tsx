import styled from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const StyledBtn = styled.div`
  width: 5.6rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  border-radius : 2rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin : 1rem;
  color: ${Colors.Gray90};
  &:hover {
    cursor: pointer;
  }
`;

export const SelectedBtn = styled(StyledBtn)`
  color: ${Colors.Blue};
  background: ${Colors.WhiteBlue};
  border : none;
`;
