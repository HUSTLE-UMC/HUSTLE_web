import React from 'react';
import * as L from './Styles';
import { Props } from './ListProps';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { selectedMatchID } from '../../../recoil/friendlyMatchPage/states';
import logo from '../../../assets/images/TempLogo.png';

export const OtherMatchList = ({ id, img, sport, title, date }: Props) => {
  const navigate = useNavigate();
  const setSelectedMatchID = useSetRecoilState(selectedMatchID);
  const handleClick = (id: number) => {
    setSelectedMatchID(id);
    navigate('/friendly/apply');
  };
  return (
    <L.Layout key={id}>
      <L.ImgLayout
        style={{
          backgroundImage: `url(${logo})`
        }}
      ></L.ImgLayout>
      <L.ContentLayout>
        <L.SportBox>{sport}</L.SportBox>
        <L.TitleBox>{title}</L.TitleBox>
        <L.ContentContainer>
          <div>
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

export default OtherMatchList;
