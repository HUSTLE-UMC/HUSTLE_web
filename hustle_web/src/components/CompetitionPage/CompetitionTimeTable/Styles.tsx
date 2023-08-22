import styled from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const CompetitionTimeTableContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  //box-sizing: border-box;
  //padding: 1rem 5rem;
  align-items: center;
`;

export const SortContainer = styled.div`
  width: 100%;
  height: 6.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.TrueWhite};
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
  width: 8.2rem;
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
