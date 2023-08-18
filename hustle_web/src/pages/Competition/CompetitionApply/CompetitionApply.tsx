import React from 'react';
import * as S from './Styles';
import Title from '../../../components/CompetitionInfo/Title/Title';
import Content from '../../../components/CompetitionInfo/Content/Content';
import TeamInfo from '../../../components/TeamInfo/TeamInfo';
import TeamInfoTest from '../../../assets/images/TeamInfoTest.png';
import MatchButton from '../../../components/MatchButton/MatchButton';
const CompetitionApply = () => {
  return (
    <S.ApplyContainer>
      <Title
        title='대회 제목'
        period='2023-08-01 ~ 2023-08-15'
        location='대회 장소'
      />
      <S.ContentWrap>
        <S.ImgWrap src='' alt='대회 이미지' />
        <S.DetailBox>
          <Content
            recruitmentPeriod='2023-08-01 ~ 2023-08-15'
            location='대회 장소'
            preliminariesFinals='예선/본선 정보'
            entryFee='참가비 정보'
            organizer='주관 정보'
            sponsor='후원 정보'
            contact='문의 정보'
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
          onClick={() => {
            // 버튼 클릭 이벤트
          }}
        />
      </S.ApplyWrap>
    </S.ApplyContainer>
  );
};

export default CompetitionApply;
