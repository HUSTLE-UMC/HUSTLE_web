import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import axios from 'axios';
import Swiper from '../../components/Swiper/Swiper';
import banner1 from '../../assets/svg/banner1.svg';
import ListInfo from '../../components/ListInfo/ListInfo';
import FriendlyMatchList from '../../components/FriendlyMatchPage/FriendlyMatchList/FriendlyMatchList';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { CompetitionState } from '../../recoil/CompetitionPage/states';
import CompetitionScreen from '../../components/CompetitionScreen/CompetitionScreen';
import { matchListsTypes } from '../../recoil/friendlyMatchPage/types';
import { matchListsState } from '../../recoil/friendlyMatchPage/states';
import { sportSelectState, sportsMenuState } from '../../recoil/SportsButton';
import { RankingProps } from '../../constants/interfaces';
import { RankingState } from '../../recoil/Ranking/rankingLists';
import TeamListInfo from '../../components/TeamListInfo/TeamListInfo';
import { HotCompetition } from '../../recoil/hotcompetitionList';

interface RankingListProps {
  rankings: RankingProps;
}

const HomePage = () => {
  // const images = [banner1, banner2, banner3];
  const images = [banner1];
  const clubs = useRecoilValue(matchListsState);
  const competitons = useRecoilValue(CompetitionState);
  const resetSportMenu = useResetRecoilState(sportsMenuState);
  const resetSportSelect = useResetRecoilState(sportSelectState);
  const rankingList = useRecoilValue(RankingState);

  const HomeRankingLists = ({ rankings }: RankingListProps) => {
    // const rankings = useRecoilValue(fetchRankings);
    return (
      <S.Box>
        {/* {rankings.map((rankings, index) => ( */}
        <S.List>
          <S.sub2>{rankings.rank}</S.sub2>
          <S.sub1>
            <TeamListInfo logo={rankings.logo} name={rankings.teamname} />
          </S.sub1>
        </S.List>
      </S.Box>
    );
  };

  const [hotcompetitions, setCompetitions] = useState<HotCompetition[]>([]);

  let matchs = [];
  matchs = rankingList;

  useEffect(() => {
    axios
      .get('https://api.sport-hustle.com/api/competition/popular', {
        params: {
          pageable: {}
        },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
        }
      })
      .then((response) => {
        console.log(response.data.data);
        setCompetitions(response.data.data);
      })
      .catch((error) => {
        console.error('error:', error);
      });

    resetSportMenu();
    resetSportSelect();
  }, []);

  return (
    <>
      <S.HomeContainer>
        <Swiper images={images} pagination={true} />
        <S.HotContainer>
          <ListInfo title='Hot 대회' />
          <S.HotBox>
            {hotcompetitions.map((v) => (
              <CompetitionScreen
                key={v.id}
                id={v.id}
                img={v.posterUrl}
                sort={v.sportEvent.name}
                title={v.title}
                date={`${v.startDate.substring(0, 10)} - ${v.endDate.substring(
                  0,
                  10
                )}`}
                location={v.place}
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
                id={v.id}
                sport={v.sportEvent.name}
                title={v.title}
                date={`${v.startDate.substring(0, 10)}`}
                location={v.locationAddress}
                clubName={v.club.name}
              />
            ))}
            {clubs.length === 0 && (
              <S.TextBox>현재 등록된 교류전이 없습니다.</S.TextBox>
            )}
          </S.ListBox>
        </S.MatchContainer>
        <S.RankContainer>
          <ListInfo title='전체 순위' />
          {matchs.slice(0, 3).map((v: RankingProps, i: number) => {
            return <HomeRankingLists key={i} rankings={v} />;
          })}
        </S.RankContainer>
      </S.HomeContainer>
    </>
  );
};

export default HomePage;
