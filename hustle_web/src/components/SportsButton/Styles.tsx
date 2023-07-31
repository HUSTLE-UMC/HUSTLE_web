import styled from 'styled-components';
import Colors from '../../styles/Color';
import FONT from '../../styles/Font';

export const StyledBtn = styled.div`
  width: 8rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${Colors.Gray80};
  &:hover {
    cursor: pointer;
  }
`;

export const SelectedBtn = styled(StyledBtn)`
  color: ${Colors.TrueWhite};
  background: ${Colors.WriteButton};
`;
