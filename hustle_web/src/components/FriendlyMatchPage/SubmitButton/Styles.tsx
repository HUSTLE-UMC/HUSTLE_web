import styled from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const MediumButton = styled.div`
  width: 39.4rem;
  height: 4.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.WriteButton};
  color: ${Colors.TrueWhite};
  border-radius: 1.2rem;
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  margin: 2rem 0;
`;

export const SmallButton = styled(MediumButton)`
  width: 21rem;
  height: 3.5rem;
`;
