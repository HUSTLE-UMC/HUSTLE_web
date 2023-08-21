// CompetitionDetail.tsx
import React from 'react';
import * as S from './Styles';
import { useRecoilValue } from 'recoil';
import { CompetitionDetailState } from '../../../recoil/CompetitionPage/states';
import { PlayerResult } from '../../../recoil/CompetitionDetailPage/types';

const CompetitionDetail = () => {
  const matchResults = useRecoilValue(CompetitionDetailState);

  return (
    <S.Container>
      {matchResults.map((result, index) => (
        <S.MatchContainer key={index}>
          <S.TeamInfo>
            <S.TeamLogo src={result.logo} alt={`Team 1`} />
            <S.TeamName>{result.team1}</S.TeamName>
          </S.TeamInfo>
          <S.MatchResult>
            {result.result.map((player: PlayerResult, playerIndex: number) => (
              <S.PlayerResult key={playerIndex}>
                <div>{player.name}</div>
                <div>득점: {player.goal}</div>
                <div>리바운드: {player.rebound}</div>
                <div>어시스트: {player.assist}</div>
              </S.PlayerResult>
            ))}
          </S.MatchResult>
          <S.TeamInfo>
            <S.TeamLogo src={result.logo} alt={`Team 2`} />
            <S.TeamName>{result.team2}</S.TeamName>
          </S.TeamInfo>
        </S.MatchContainer>
      ))}
    </S.Container>
  );
};

export default CompetitionDetail;
