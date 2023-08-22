import styled from 'styled-components';
import FONT from '../../../styles/Font';
import Colors from '../../../styles/Color';

export const Container = styled.div`
  width: 128rem;
  height: auto;
  display: flex;
  align-items: center;
`;

export const MatchContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  //margin-bottom: 2rem;
`;

export const TeamWrap = styled.div`
  display: flex;
  width: 100%;
  height: 16rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 9.3rem;
  margin-right: 9.3rem;
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${Colors.MainBlack};
`;

export const TeamName = styled.div`
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.MainBlack};
`;

export const MatchResult = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PlayerResult = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${Colors.MainBlack};
`;

export const labelWrap = styled.div`
  width: 128rem;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NameBox = styled.div`
  display: flex;
  width: 26.3rem;
  height: 4rem;
  background-color: ${Colors.WriteButton};
  align-items: center;
  justify-content: center;
  color: ${Colors.TrueWhite};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  margin-top: 0.7rem;
  border-radius: 1.2rem;
`;

export const NameResultBox = styled.input`
  display: flex;
  width: 26.3rem;
  height: 4rem;
  background-color: white;
  align-items: center;
  justify-content: center;
  color: ${Colors.MainBlack};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  margin-top: 0.7rem;
  border-radius: 1.2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.25);
`;

export const NumberBox = styled.div`
  display: flex;
  width: 17.5rem;
  height: 4rem;
  background-color: ${Colors.WriteButton};
  align-items: center;
  justify-content: center;
  color: ${Colors.TrueWhite};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  margin-top: 0.7rem;
  border-radius: 1.2rem;
`;

export const NumberResultBox = styled.input`
  display: flex;
  width: 17.5rem;
  height: 4rem;
  background-color: white;
  align-items: center;
  justify-content: center;
  color: ${Colors.MainBlack};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  margin-top: 0.7rem;
  border-radius: 1.2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.25);
`;

export const PlayerInputBox = styled.div`
  display: flex;
  width: 128rem;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AddPlayerButton = styled.div`
  display: flex;
  width: 83rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  color: ${Colors.TrueWhite};
  background-color: ${Colors.WriteButton};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.BOLD};
  border-radius: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const SaveButton = styled.div`
  display: flex;
  width: 83rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  color: ${Colors.TrueWhite};
  background-color: ${Colors.WriteButton};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.BOLD};
  border-radius: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
