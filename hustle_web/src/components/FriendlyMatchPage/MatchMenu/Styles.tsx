import styled from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const TitleContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid ${Colors.Gray20};
`;

export const WriteButton = styled.div`
  width: 8rem;
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.Gray20};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  background: ${Colors.TrueWhite};
  cursor: pointer;
`;

export const MenuBox = styled.div`
  width: 25.4rem;
  display: flex;
  justify-content: space-between;
`;

export const SelectedMenu = styled.button`
  all: unset;
  font-size: ${FONT.SIZE.BODY1};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${Colors.MainBlack};
  cursor: pointer;
`;

export const StandardMenu = styled(SelectedMenu)`
  color: ${Colors.Gray70};
`;

export const Partition = styled.div`
  display: flex;
  align-items: center;
  font-size: ${FONT.SIZE.CAPTION};
  color: ${Colors.Gray20};
`;
