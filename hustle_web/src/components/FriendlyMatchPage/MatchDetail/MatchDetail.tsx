import React from 'react';
import * as C from './Styles';
import { useRecoilValue } from 'recoil';
import {
  friendlyMenuSelector,
  matchSelector
} from '../../../recoil/friendlyMatchPage/selectors';
import { useNavigate } from 'react-router-dom';

const MatchDetail = () => {
  const match = useRecoilValue(matchSelector);
  const menu = useRecoilValue(friendlyMenuSelector);
  const navigate = useNavigate();
  return (
    <C.Layout>
      <C.TitleLayout>
        <C.TitleContainer>
          <C.ClubBox>{match.clubName}</C.ClubBox>
          <C.TitleBox>{match.title}</C.TitleBox>
        </C.TitleContainer>
        <C.ImgBox></C.ImgBox>
      </C.TitleLayout>
      <C.ContentLayout>
        {menu === 0 ? (
          <C.SubmitButton onClick={() => navigate('/friendly/apply/form')}>
            교류전 신청
          </C.SubmitButton>
        ) : (
          <C.SubmitButton onClick={() => navigate('/friendly/apply/form')}>
            초청하기
          </C.SubmitButton>
        )}

        <div>
          <C.InfoTitle>동아리명</C.InfoTitle>
          <C.InfoTitle>대표자 연락처</C.InfoTitle>
          <C.InfoTitle>희망 일시</C.InfoTitle>
          <C.InfoTitle>교류전 장소</C.InfoTitle>
          <C.InfoTitle>위치 보기</C.InfoTitle>
        </div>
        <div>
          <C.Info>{match.clubName}</C.Info>
          <C.Info>
            {match.person}
            {'\t'}
            {match.contact}
          </C.Info>
          <C.Info>{match.date}</C.Info>
          <C.Info>{match.location}</C.Info>
          <C.LocationBox />
        </div>
      </C.ContentLayout>
      {/* <SubmitButton
        label='신청하기'
        onClick={() => navigate('/friendly/apply/form')}
      /> */}
    </C.Layout>
  );
};

export default MatchDetail;
