import React from 'react';
import * as S from './Styles';
import Swiper from '../../components/Swiper/Swiper';
import banner1 from '../../assets/svg/banner1.svg';
import banner2 from '../../assets/svg/banner2.svg';
import banner3 from '../../assets/svg/banner3.svg';
import ListInfo from '../../components/ListInfo/ListInfo';
import FriendlyMatchList from '../../components/FriendlyMatchPage/FriendlyMatchList/FriendlyMatchList';
import image from '../../assets/images/TempLogo.png';
import competitonLogo from '../../assets/images/CompetitionEx.png';
import { useRecoilValue } from 'recoil';
import { clubListsState } from '../../recoil/friendlyMatchPage/states';
import { CompetitionState } from '../../recoil/CompetitionPage/states';
import CompetitionScreen from '../../components/CompetitionScreen/CompetitionScreen';

const HomePage = () => {
  // const images = [banner1, banner2, banner3];
  const images = [banner1];
  const clubs = useRecoilValue(clubListsState);
  const competitons = useRecoilValue(CompetitionState);

  return (
    <>
      <S.HomeContainer>
        <Swiper images={images} pagination={true} />
        <S.HotContainer>
          <ListInfo title='Hot 게시물' />
          <S.HotBox>
            {competitons.map((v) => (
              <CompetitionScreen
                key={v.id}
                id={v.id}
                img={competitonLogo}
                sort={v.sort}
                title={v.title}
                date={v.date}
                location={v.location}
              />
            ))}
          </S.HotBox>
        </S.HotContainer>
        <S.MatchContainer>
          <ListInfo title='교류전' />
          <S.ListBox>
            {clubs.map((v) => (
              <FriendlyMatchList
                key={v.id}
                id={v.id}
                img={image}
                sport={v.sport}
                title={v.title}
                date={v.date}
                location={v.location}
              />
            ))}
          </S.ListBox>
        </S.MatchContainer>
      </S.HomeContainer>
    </>
  );
};

export default HomePage;
