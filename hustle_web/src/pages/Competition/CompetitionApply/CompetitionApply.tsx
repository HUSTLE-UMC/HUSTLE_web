import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Title from '../../../components/CompetitionInfo/Title/Title';
import Content from '../../../components/CompetitionInfo/Content/Content';
import TeamInfo from '../../../components/TeamInfo/TeamInfo';
import TeamInfoTest from '../../../assets/images/TeamInfoTest.png';
import MatchButton from '../../../components/MatchButton/MatchButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { MatchState } from '../../../recoil/MatchList';
const CompetitionApply = () => {
  const navigate = useNavigate();
  const { competitionId } = useParams();
  const matchList = useRecoilValue(MatchState);

  // competition_id와 일치하는 대회 정보를 찾습니다.
  const competitionInfo = matchList.find(
    (contest) => contest.id === Number(competitionId)
  );

  const handleResultClick = () => {
    navigate('/competitions/applyform');
  };

  useEffect(() => {
    console.log('competitionId:', competitionId);
    console.log('competitionInfo:', competitionInfo);
  }, [competitionId, competitionInfo]);
  return (
    <S.ApplyContainer>
      {competitionInfo ? (
        <React.Fragment>
          <Title
            title={competitionInfo.title}
            period={`${competitionInfo.startDate.substring(
              0,
              10
            )} - ${competitionInfo.endDate.substring(0, 10)}`}
            location={competitionInfo.place}
          />
          <S.ContentWrap>
            <S.ImgWrap src={competitionInfo.postUrl} alt='대회 이미지' />
            <S.DetailBox>
              <Content
                recruitmentPeriod={`${competitionInfo.recruitmentStartDate.substring(
                  0,
                  10
                )} - ${competitionInfo.recruitmentEndDate.substring(0, 10)}`}
                location={competitionInfo.title}
                preliminariesFinals={`${competitionInfo.preRoundGroupCount}팀 / ${competitionInfo.finalRoundTeamCount}팀`}
                entryFee={`${competitionInfo.entryFee} 원`}
                organizer={competitionInfo.host}
                sponsor={competitionInfo.sponsor}
                contact={`${competitionInfo.contacts
                  .map((contact) => `${contact.name} (${contact.phoneNumber})`)
                  .join(', ')}`}
              />
              <S.TeaminfoLabel>참가팀 현황</S.TeaminfoLabel>
              <S.TeamInfoBox>
                <TeamInfo logo={TeamInfoTest} name='바스타즈' />
              </S.TeamInfoBox>
            </S.DetailBox>
          </S.ContentWrap>
          <S.ApplyWrap>
            <MatchButton
              type='big'
              label='신청하기'
              onClick={handleResultClick}
            />
          </S.ApplyWrap>
        </React.Fragment>
      ) : (
        <p key='loading-message'>대회 정보를 불러오는 중...</p>
      )}
    </S.ApplyContainer>
  );
};
export default CompetitionApply;
