import React, { useState } from 'react';
import * as S from './Styles';
import { useRecoilState } from 'recoil';
import { CompetitionDetailState } from '../../../recoil/CompetitionPage/states';
import { PlayerInfo } from '../../../recoil/CompetitionPage/types';

const defaultPlayerInfo: PlayerInfo = {
  name: '',
  goal: '',
  rebound: '',
  assist: ''
};

const CompetitionInput = () => {
  const [matchResults, setMatchResults] = useRecoilState(
    CompetitionDetailState
  );
  const [team1Players, setTeam1Players] = useState<PlayerInfo[]>([
    defaultPlayerInfo
  ]);
  const [team2Players, setTeam2Players] = useState<PlayerInfo[]>([
    defaultPlayerInfo
  ]);

  //  teamIndex가 0이면 team1에 , 1이면 team2에 여기 dropdown으로 받은 상태에 관해서 조작하면 될듯
  const handleAddPlayer = (teamIndex: number) => {
    if (teamIndex === 0) {
      setTeam1Players([...team1Players, defaultPlayerInfo]);
    } else if (teamIndex === 1) {
      setTeam2Players([...team2Players, defaultPlayerInfo]);
    }
  };

  //    matchResults 배열에 대한 처리, index가 0일 경우, result1 속성을 team1Players 배열로 설정하여 첫 번째 경기 결과 객체에 팀 1의 선수 정보를 추가
  // index가 1일 경우, result2 속성을 team2Players 배열로 설정하여 두 번째 경기 결과 객체에 팀 2의 선수 정보를 추가
  const handleSave = () => {
    const newMatchResults = matchResults.map((result, index) => {
      if (index === 0) {
        return { ...result, result1: team1Players };
      } else if (index === 1) {
        return { ...result, result2: team2Players };
      }
      return result;
    });
    //  matchresults 업데이트
    setMatchResults(newMatchResults);
  };

  return (
    <S.Container>
      {matchResults.map((result, index) => (
        <S.MatchContainer key={index}>
          <S.TeamWrap>
            <S.TeamInfo>
              <S.TeamName>팀1이름 : {result.team1}</S.TeamName>
            </S.TeamInfo>
            <S.TeamInfo>
              <S.TeamName>팀2이름 : {result.team2}</S.TeamName>
            </S.TeamInfo>
          </S.TeamWrap>
          <S.MatchResult>
            <S.labelWrap>
              <S.NameBox>이름</S.NameBox>
              <S.NumberBox>득점</S.NumberBox>
              <S.NumberBox>리바운드</S.NumberBox>
              <S.NumberBox>어시스트</S.NumberBox>
            </S.labelWrap>
            {index === 0
              ? team1Players.map((player, playerIndex) => (
                  <S.PlayerInputBox key={playerIndex}>
                    <S.NameResultBox
                      type='text'
                      placeholder='이름'
                      value={player.name}
                      onChange={(e: { target: { value: string } }) => {
                        const updatedPlayers = [...team1Players];
                        updatedPlayers[playerIndex].name = e.target.value;
                        setTeam1Players(updatedPlayers);
                      }}
                    />
                    <S.NumberResultBox
                      placeholder='득점'
                      value={player.goal}
                      onChange={(e: { target: { value: string } }) => {
                        const updatedPlayers = [...team1Players];
                        updatedPlayers[playerIndex].goal = e.target.value;
                        setTeam1Players(updatedPlayers);
                      }}
                    />
                    <S.NumberResultBox
                      placeholder='리바운드'
                      value={player.rebound}
                      onChange={(e: { target: { value: string } }) => {
                        const updatedPlayers = [...team1Players];
                        updatedPlayers[playerIndex].rebound = e.target.value;
                        setTeam1Players(updatedPlayers);
                      }}
                    />
                    <S.NumberResultBox
                      placeholder='어시스트'
                      value={player.assist}
                      onChange={(e: { target: { value: string } }) => {
                        const updatedPlayers = [...team1Players];
                        updatedPlayers[playerIndex].assist = e.target.value;
                        setTeam1Players(updatedPlayers);
                      }}
                    />
                  </S.PlayerInputBox>
                ))
              : // index === 1일 경우 동일한 방식으로 team2Players에 맞게 매핑
                team2Players.map((player, playerIndex) => (
                  <S.PlayerInputBox key={playerIndex}>
                    <S.NameResultBox
                      placeholder='이름'
                      value={player.name}
                      onChange={(e: { target: { value: string } }) => {
                        const updatedPlayers = [...team2Players];
                        updatedPlayers[playerIndex].name = e.target.value;
                        setTeam2Players(updatedPlayers);
                      }}
                    />
                    <S.NumberResultBox
                      placeholder='득점'
                      value={player.goal}
                      onChange={(e: { target: { value: string } }) => {
                        const updatedPlayers = [...team2Players];
                        updatedPlayers[playerIndex].goal = e.target.value;
                        setTeam2Players(updatedPlayers);
                      }}
                    />
                    <S.NumberResultBox
                      placeholder='리바운드'
                      value={player.rebound}
                      onChange={(e: { target: { value: string } }) => {
                        const updatedPlayers = [...team2Players];
                        updatedPlayers[playerIndex].rebound = e.target.value;
                        setTeam2Players(updatedPlayers);
                      }}
                    />
                    <S.NumberResultBox
                      placeholder='어시스트'
                      value={player.assist}
                      onChange={(e: { target: { value: string } }) => {
                        const updatedPlayers = [...team2Players];
                        updatedPlayers[playerIndex].assist = e.target.value;
                        setTeam2Players(updatedPlayers);
                      }}
                    />
                  </S.PlayerInputBox>
                ))}
            <S.AddPlayerButton onClick={() => handleAddPlayer(index)}>
              선수 추가
            </S.AddPlayerButton>
            <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
          </S.MatchResult>
        </S.MatchContainer>
      ))}
    </S.Container>
  );
};

export default CompetitionInput;
