import React from 'react';
import * as C from './Styles';
import { Photo } from '../../../stories/Icons/svg';
import SubmitButton from '../SubmitButton/SubmitButton';
import { useRecoilValue } from 'recoil';
import { matchSelector } from '../../../recoil/friendlyMatchPage/selectors';
import { useNavigate } from 'react-router-dom';

const MatchDetail = () => {
  const match = useRecoilValue(matchSelector);
  const navigate = useNavigate();
  return (
    <C.Layout>
      <C.TitleContainer>{match.title}</C.TitleContainer>
      <C.ContentLayout>
        <C.ImageContainer>
          <Photo />
        </C.ImageContainer>
        <C.InfoContainer>
          <div>
            <C.InfoTitle>동아리</C.InfoTitle>
            <C.Info>{match.clubName}</C.Info>
          </div>
          <div>
            <C.InfoTitle>일시</C.InfoTitle>
            <C.Info>{match.date}</C.Info>
          </div>
          <div>
            <C.InfoTitle>장소</C.InfoTitle>
            <C.Info>{match.location}</C.Info>
          </div>
          <div>
            <C.InfoTitle>대표자 연락처</C.InfoTitle>
            <C.Info>
              {match.person}
              {'\r'}
              {match.contact}
            </C.Info>
          </div>
        </C.InfoContainer>
      </C.ContentLayout>
      <SubmitButton
        label='신청하기'
        onClick={() => navigate('/friendly/apply/form')}
      />
    </C.Layout>
  );
};

export default MatchDetail;
