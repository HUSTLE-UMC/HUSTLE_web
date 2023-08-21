import styled from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const LabelContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 3.2rem;
  background-color: ${Colors.BGgray};
  border-top: 0.1rem solid ${Colors.Gray20};
  border-bottom: 0.1rem solid ${Colors.Gray20};
`;

export const LabelTitle = styled.p`
  color: ${Colors.MainBlack};
  font-size: ${FONT.SIZE.BODY1};
  font-weight: ${FONT.WEIGHT.BOLD};
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.TrueWhite};
`;

export const TimeWrap = styled.div`
  margin-left: 3.2rem;
  margin-right: 4rem;
  width: 4.2rem;
  height: auto;
  color: ${Colors.TrueBlack};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
`;

export const MatchNameWrap = styled.div`
  width: 28rem;
  height: auto;
  color: ${Colors.Gray70};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
`;

export const MatchResultWrap = styled.div`
  width: 48.9rem;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > * {
    flex: 1;
  }
`;

export const MatchResultBox = styled.div`
  width: auto;
  height: auto;
  color: ${Colors.MainBlack};
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.BOLD};
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ButtonBox = styled.div`
  width: 28rem;
  height: auto;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  margin-left: 14rem;
`;
