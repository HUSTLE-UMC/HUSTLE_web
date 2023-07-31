import React from 'react';
import * as L from './Styles';
import { useRecoilValue } from 'recoil';
import { clubListsState } from '../../../recoil/friendlyMatchPage/states';
import img from '../../../assets/images/TempLogo.png';

export const FriendlyMatchList = () => {
  const clubLists = useRecoilValue(clubListsState);
  return (
    <L.Layout>
      {clubLists.map((match, index) => (
        <div key={index}>
          <L.ImgLayout>
            <img src={img} />
          </L.ImgLayout>
          <L.ContentLayout>
            <L.SportBox>{match.sport}</L.SportBox>
            <L.TitleBox>{match.title}</L.TitleBox>
            <L.ContentContainer>
              <div>
                <L.ContentBox>{match.location}</L.ContentBox>
                <L.ContentBox> {match.date}</L.ContentBox>
              </div>
              <L.SubmitBtn
                onClick={() => {
                  console.log('임시 동작');
                }}
              >
                신청하기
              </L.SubmitBtn>
            </L.ContentContainer>
          </L.ContentLayout>
        </div>
      ))}
    </L.Layout>
  );
};

export default FriendlyMatchList;
