import React, { useEffect } from 'react';
import * as S from './Styles';
import Swiper from '../../components/Swiper/Swiper';
import banner1 from '../../assets/svg/banner1.svg';
import ListInfo from '../../components/ListInfo/ListInfo';
import FriendlyMatchList from '../../components/FriendlyMatchPage/FriendlyMatchList/FriendlyMatchList';
import competitonLogo from '../../assets/images/CompetitionEx.png';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { CompetitionState } from '../../recoil/CompetitionPage/states';
import CompetitionScreen from '../../components/CompetitionScreen/CompetitionScreen';
import { matchListsTypes } from '../../recoil/friendlyMatchPage/types';
import { matchListsState } from '../../recoil/friendlyMatchPage/states';
import { sportSelectState, sportsMenuState } from '../../recoil/SportsButton';

const HomePage = () => {
  // const images = [banner1, banner2, banner3];
  const images = [banner1];
  const clubs = useRecoilValue(matchListsState);
  const competitons = useRecoilValue(CompetitionState);
  const resetSportMenu = useResetRecoilState(sportsMenuState);
  const resetSportSelect = useResetRecoilState(sportSelectState);
  useEffect(() => {
    resetSportMenu();
    resetSportSelect();
  }, []);

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
            {clubs.map((v: matchListsTypes, i: number) => (
              <FriendlyMatchList
                key={i}
                id={i}
                sport={v.sport}
                title={v.title}
                date={v.date}
                location={v.location}
                clubName={v.clubName}
              />
            ))}
            {clubs.length === 0 && (
              <S.TextBox>현재 등록된 교류전이 없습니다.</S.TextBox>
            )}
          </S.ListBox>
        </S.MatchContainer>
        <S.RankContainer>
          <ListInfo title='인기 순위' />
        </S.RankContainer>
      </S.HomeContainer>
    </>
  );
};

export default HomePage;
