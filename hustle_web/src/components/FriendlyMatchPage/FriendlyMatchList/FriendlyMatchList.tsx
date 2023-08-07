import React from 'react';
import * as L from './Styles';
import { Props } from './MatchListProps';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { selectedMatchID } from '../../../recoil/friendlyMatchPage/states';

export const FriendlyMatchList = ({
  id,
  img,
  sport,
  title,
  location,
  date
}: Props) => {
  const navigate = useNavigate();
  const setSelectedMatchID = useSetRecoilState(selectedMatchID);
  const handleClick = (id: number) => {
    setSelectedMatchID(id);
    navigate('/friendly/apply');
  };
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
              handleClick(id);
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
