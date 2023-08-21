import React, { useState } from 'react';
import * as S from './Styles';
import { useRecoilState } from 'recoil';
import { CompetitionDetailState } from '../../../recoil/CompetitionPage/states';
import { PlayerInfo } from '../../../recoil/CompetitionPage/types';

const defaultPlayerInfo: PlayerInfo = {
    name: '',
    goal: '',
    rebound: '',
    assist: '',
};

const CompetitionInput = () => {
    const [matchResults, setMatchResults] = useRecoilState(CompetitionDetailState);
    const [team1Players, setTeam1Players] = useState<PlayerInfo[]>([defaultPlayerInfo]);
    const [team2Players, setTeam2Players] = useState<PlayerInfo[]>([defaultPlayerInfo]);

    const handleAddPlayer = (teamIndex: number) => {
        if (teamIndex === 0) {
            setTeam1Players([...team1Players, defaultPlayerInfo]);
        } else if (teamIndex === 1) {
            setTeam2Players([...team2Players, defaultPlayerInfo]);
        }
    };

    const handleSave = () => {
        const newMatchResults = matchResults.map((result, index) => {
            if (index === 0) {
                return { ...result, result1: team1Players };
            } else if (index === 1) {
                return { ...result, result2: team2Players };
            }
            return result;
        });

        setMatchResults(newMatchResults);
    };

    return (
        <S.Container>
            {matchResults.map((result, index) => (
                <S.MatchContainer key={index}>
                    <S.TeamWrap>
                        <S.TeamInfo>
                            <S.TeamLogo src={result.logo1} alt={''} />
                            <S.TeamName>{result.team1}</S.TeamName>
                        </S.TeamInfo>
                        <S.TeamInfo>
                            <S.TeamLogo src={result.logo2} alt={''} />
                            <S.TeamName>{result.team2}</S.TeamName>
                        </S.TeamInfo>
                    </S.TeamWrap>
                    <S.InputWrap>
                        <S.InputBox>
                            <S.InputLabel>이름</S.InputLabel>
                            <S.InputLabel>득점</S.InputLabel>
                            <S.InputLabel>리바운드</S.InputLabel>
                            <S.InputLabel>어시스트</S.InputLabel>
                        </S.InputBox>
                        {PlayerInfo === 0 ? (
                            team1Players.map((player, playerIndex) => (
                                <S.PlayerInputBox key={playerIndex}>
                                    <S.InputField
                                        placeholder="이름"
                                        value={player.name}
                                        onChange={(e) => {
                                            const updatedPlayers = [...team1Players];
                                            updatedPlayers[playerIndex].name = e.target.value;
                                            setTeam1Players(updatedPlayers);
                                        }}
                                    />
                                    <S.InputField
                                        placeholder="득점"
                                        value={player.goal}
                                        onChange={(e) => {
                                            const updatedPlayers = [...team1Players];
                                            updatedPlayers[playerIndex].goal = e.target.value;
                                            setTeam1Players(updatedPlayers);
                                        }}
                                    />
                                    <S.InputField
                                        placeholder="리바운드"
                                        value={player.rebound}
                                        onChange={(e) => {
                                            const updatedPlayers = [...team1Players];
                                            updatedPlayers[playerIndex].rebound = e.target.value;
                                            setTeam1Players(updatedPlayers);
                                        }}
                                    />
                                    <S.InputField
                                        placeholder="어시스트"
                                        value={player.assist}
                                        onChange={(e) => {
                                            const updatedPlayers = [...team1Players];
                                            updatedPlayers[playerIndex].assist = e.target.value;
                                            setTeam1Players(updatedPlayers);
                                        }}
                                    />
                                </S.PlayerInputBox>
                            ))
                        ) : (
                            // teamIndex === 1일 경우 동일한 방식으로 team2Players에 맞게 매핑
                        )}
                        <S.AddPlayerButton onClick={() => handleAddPlayer(index)}>
                            선수 추가
                        </S.AddPlayerButton>
                    </S.InputWrap>
                </S.MatchContainer>
            ))}
            <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
        </S.Container>
    );
};

export default CompetitionInput;
