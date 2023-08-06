import React from 'react';
import * as L from './Styles';
import { Props } from './MatchListProps';

export const FriendlyMatchList = ({
  id,
  img,
  sport,
  title,
  location,
  date
}: Props) => {
  return (
    <L.Layout key={id}>
      <L.ImgLayout>
        <img src={img} />
      </L.ImgLayout>
      <L.ContentLayout>
        <L.SportBox>{sport}</L.SportBox>
        <L.TitleBox>{title}</L.TitleBox>
        <L.ContentContainer>
          <div>
            <L.ContentBox>{location}</L.ContentBox>
            <L.ContentBox> {date}</L.ContentBox>
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
    </L.Layout>
  );
};

export default FriendlyMatchList;
