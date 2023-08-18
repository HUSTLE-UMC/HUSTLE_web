import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchRankings, matchListSelector } from '../../recoil/Ranking/ranking';
import * as R from './RankingStyle';
import SportsMenu from '../SportsMenu/SportsMenu';
import DropdownBtn from './DropDownBtn';
import { selectedCompetitionId } from '../../recoil/CompetitionPage/states';
import { sportSelectState } from '../../recoil/SportsButton';
import { RankingState } from '../../recoil/Ranking/rankingLists';
import { RankingProps } from '../../constants/interfaces';
import RankingLists from './RankingList';

const Ranking = () => {
  // const [ranking, setRankings] = useRecoilState(rankignState);
  const fetchedRankings = useRecoilValue(fetchRankings);
  const [selectedId, setSelectedId] = useRecoilState(selectedCompetitionId);
  const filtermatchs = useRecoilValue(matchListSelector);
  const isSelected = useRecoilValue(sportSelectState);
  const rankingList = useRecoilValue(RankingState);
  let matchs = [];
  // useEffect(() => {
  //   setRankings(fetchedRankings);
  //   },[fetchedRankings,setRankings]);
  const selectedRankings = fetchedRankings.filter(rank => rank.id === selectedId);

  isSelected ? (matchs = filtermatchs) : (matchs = rankingList)

  useEffect(() => {
    setSelectedId(selectedId); // 선택한 대회의 id 설정
  }, [selectedId, setSelectedId]);

  return (
    <R.Box>
      <R.Div>
        <SportsMenu/>
      </R.Div>
      <div>
        <h3>순위</h3>
        <R.Hr/>
        <div>
        <DropdownBtn index={selectedId}/>
        </div>
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
                <RankingLists key={i} selectedCompetitionId={selectedId} rankings={selectedRankings} />
              )
            })}
          </R.Tbody>
        </R.Table>
      </div>
    </R.Box>
  )
}

export default Ranking;