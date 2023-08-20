import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { matchListSelector } from '../../recoil/Ranking/ranking';
import * as R from './RankingStyle';
import SportsMenu from './SportMenu/SportMenu';
import DropdownBtn from './DropDownBtn';
import { selectedCompetitionId } from '../../recoil/CompetitionPage/states';
import { sportSelectState } from '../../recoil/SportsButton';
import { RankingState } from '../../recoil/Ranking/rankingLists';
import { RankingProps } from '../../constants/interfaces';
import RankingLists from './RankingList';

const Ranking = () => {
  // const [ranking, setRankings] = useRecoilState(rankignState);
  const [selectedId, setSelectedId] = useRecoilState(selectedCompetitionId);
  const filtermatchs = useRecoilValue(matchListSelector);
  const isSelected = useRecoilValue(sportSelectState);
  const rankingList = useRecoilValue(RankingState);

  let matchs = [];
  // useEffect(() => {
  //   setRankings(fetchedRankings);
  //   },[fetchedRankings,setRankings]);

  matchs = isSelected ? filtermatchs : rankingList;

  useEffect(() => {
    setSelectedId(selectedId); // 선택한 대회의 id 설정
  }, [selectedId, setSelectedId]);

  return (
    <R.Box>
      <div>
        <R.H3>순위</R.H3>
        <R.Hr/>
        <R.Div>
        <SportsMenu/>
        </R.Div>
        <R.Layout>
        <DropdownBtn/>
        </R.Layout>
        <R.Table>
          <R.Thead>
            <R.Div>
              <R.sub>순위</R.sub>
              <R.sub1>동아리</R.sub1>
              <R.sub>경기수</R.sub>
              <R.sub>승</R.sub>
              <R.sub>무</R.sub>
              <R.sub>패</R.sub>
            </R.Div>
          </R.Thead>
          <R.Tbody>
            {matchs.map((v : RankingProps, i : number) => {
              return (
                <RankingLists key={i} rankings={v}/>
              )
            })}
          </R.Tbody>
        </R.Table>
      </div>
    </R.Box>
  )
}

export default Ranking;