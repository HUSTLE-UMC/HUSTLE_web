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
  height: 31.2rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ResultWrap = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ResultBox = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 9.3rem;
  margin-right: 9.3rem;
`;

export const TeamLogo = styled.img`
  width: 20rem;
  height: 20rem;
  margin-bottom: 2rem;
  border-radius: 10rem;
`;

export const TeamName = styled.div`
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.MainBlack};
`;

export const MatchResult = styled.div`
  width: 100%;
  height: 62rem;
  display: flex;
  flex-direction: column;
  background-color: #61dafb;
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
  width: auto;
  height: 4rem;
  display: flex;
  flex-direction: row;
`;

export const NameBox = styled.div`
  display: flex;
  width: 15rem;
  height: 4rem;
  background-color: #3f37c9;
  align-items: center;
  justify-content: center;
  color: ${Colors.TrueWhite};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.BOLD};
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  border-radius: 1.2rem;
`;

export const NameResultBox = styled.div`
  display: flex;
  width: 15rem;
  height: 4rem;
  background-color: white;
  align-items: center;
  justify-content: center;
  color: ${Colors.MainBlack};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  margin: 0.4rem;
  border-radius: 1.2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.25);
`;

export const NumberBox = styled.div`
  display: flex;
  width: 10rem;
  height: 4rem;
  background-color: #3f37c9;
  align-items: center;
  justify-content: center;
  color: ${Colors.TrueWhite};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.BOLD};
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  border-radius: 1.2rem;
`;

export const NumberResultBox = styled.div`
  display: flex;
  width: 10rem;
  height: 4rem;
  background-color: white;
  align-items: center;
  justify-content: center;
  color: ${Colors.MainBlack};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  margin: 0.4rem;
  border-radius: 1.2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.25);
`;
