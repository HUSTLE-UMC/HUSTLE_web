import styled from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const ContentLayout = styled.div`
  width: 100%;
  height: 57.2rem;
  background: #fcfcfc;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 18.5rem 39.4rem 18.5rem;
  justify-content: center;
  grid-gap: 5.3rem;
`;

export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 39.4rem;
  height: 30rem;
`;

export const SideContainer = styled.div`
  width: 18.5rem;
`;

export const TitleBox = styled.div`
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.Gray70};
  margin: 1rem 0;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListLayout = styled.div`
  width: 101rem;
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  padding: 2rem 0;
`;

export const ListTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.Gray20};
`;

export const ListText = styled.div`
  font-size: ${FONT.SIZE.BODY1};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${Colors.Gray80};
`;

export const ListButton = styled.div`
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${Colors.WriteButton};
  cursor: pointer;
`;
