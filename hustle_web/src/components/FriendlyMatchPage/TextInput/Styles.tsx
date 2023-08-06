import styled from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const InputLarge = styled.input`
  box-sizing: border-box;
  border: 1px solid ${Colors.Gray30};
  display: flex;
  align-items: center;
  width: 39.4rem;
  height: 4rem;
  padding: 0 1.2rem;
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.LIGHT};
  border-radius: 1.2rem;
  background: ${Colors.TrueWhite};
  &&::placeholder {
    color: ${Colors.Gray30};
  }
`;

export const InputSmall = styled(InputLarge)`
  width: 19rem;
`;
