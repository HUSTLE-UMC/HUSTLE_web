import styled from 'styled-components';
import FONT from '../../styles/Font';
import Colors from '../../styles/Color';

export const Container = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: row;
  border-radius: 1.2rem;
  border: solid 0.1rem ${Colors.Gray30};
  background-color: ${Colors.TrueWhite};
  justify-content: start;
  align-items: center;
`;

export const ContainerSmall = styled(Container)`
  width: 20rem;
`;

export const ContainerMedium = styled(Container)`
  width: 40rem;
`;

export const Input = styled.input`
  height: auto;
  border: none;
  outline: none;
  font-style: normal;
  line-height: normal;
  font-family: Pretendard;
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: ${FONT.SIZE.BODY2};
  color: ${Colors.MainBlack};
  font-weight: ${FONT.WEIGHT.LIGHT};
  &&::placeholder {
    color: ${Colors.Gray30};
  }
`;

export const InputSmall = styled(Input)`
  width: 16rem;
`;

export const InputMedium = styled(Input)`
  width: 32rem;
`;
