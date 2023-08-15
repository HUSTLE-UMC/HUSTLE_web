import React from 'react';
import * as S from './Styles';
import Title from '../../../components/CompetitionInfo/Title/Title';
import Content from '../../../components/CompetitionInfo/Content/Content';
import { InfoWrap } from './Styles';

const CompetitionApply = () => {
  return (
    <S.ApplyContainer>
      <Title
        title='대회 제목'
        period='2023-08-01 ~ 2023-08-15'
        location='대회 장소'
      />
      <S.ContentWrap>
        <Content
          recruitmentPeriod='2023-08-01 ~ 2023-08-15'
          location='대회 장소'
          preliminariesFinals='예선/본선 정보'
          entryFee='참가비 정보'
          organizer='주관 정보'
          sponsor='후원 정보'
          contact='문의 정보'
        />
      </S.ContentWrap>
    </S.ApplyContainer>
  );
};

export default CompetitionApply;
