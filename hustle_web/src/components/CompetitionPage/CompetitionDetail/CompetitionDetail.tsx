import React from 'react';
import * as S from './Styles';
import { useRecoilValue } from 'recoil';
import { CompetitionDetailState } from '../../../recoil/CompetitionPage/states';
import { PlayerInfo } from '../../../recoil/CompetitionPage/types';

const CompetitionDetail = () => {
  const matchResults = useRecoilValue(CompetitionDetailState);

  return (
    <S.Container>
      {matchResults.map((result, index) => (
        <S.MatchContainer key={index}>
          <S.TeamWrap>
            <S.TeamInfo>
              <S.TeamLogo src={result.logo1} alt={''} />
              <S.TeamName>{result.score1}</S.TeamName>
            </S.TeamInfo>
            <S.TeamInfo>
              <S.TeamLogo src={result.logo2} alt={''} />
              <S.TeamName>{result.score2}</S.TeamName>
            </S.TeamInfo>
          </S.TeamWrap>
          <S.ResultWrap>
            <S.ResultBox>
              <S.labelWrap>
                <S.NameBox>이름</S.NameBox>
                <S.NumberBox>득점</S.NumberBox>
                <S.NumberBox>리바운드</S.NumberBox>
                <S.NumberBox>어시스트</S.NumberBox>
              </S.labelWrap>
              {result.result.map((player: PlayerInfo, playerIndex: number) => (
                <S.PlayerResult key={playerIndex}>
                  <S.NameResultBox>{player.name}</S.NameResultBox>
                  <S.NumberResultBox>{player.goal}</S.NumberResultBox>
                  <S.NumberResultBox>{player.rebound}</S.NumberResultBox>
                  <S.NumberResultBox>{player.assist}</S.NumberResultBox>
                </S.PlayerResult>
              ))}
            </S.ResultBox>
            <S.ResultBox>
              <S.labelWrap>
                <S.NameBox>이름</S.NameBox>
                <S.NumberBox>득점</S.NumberBox>
                <S.NumberBox>리바운드</S.NumberBox>
                <S.NumberBox>어시스트</S.NumberBox>
              </S.labelWrap>
              {result.result.map((player: PlayerInfo, playerIndex: number) => (
                <S.PlayerResult key={playerIndex}>
                  <S.NameResultBox>{player.name}</S.NameResultBox>
                  <S.NumberResultBox>{player.goal}</S.NumberResultBox>
                  <S.NumberResultBox>{player.rebound}</S.NumberResultBox>
                  <S.NumberResultBox>{player.assist}</S.NumberResultBox>
                </S.PlayerResult>
              ))}
            </S.ResultBox>
          </S.ResultWrap>
        </S.MatchContainer>
      ))}
    </S.Container>
  );
};

export default CompetitionDetail;
