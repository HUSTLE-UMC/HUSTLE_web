import { selectedCompetitionId } from '../../recoil/CompetitionPage/states';
import { fetchRankings } from '../../recoil/Ranking/ranking';
import { useRecoilValue } from 'recoil';
import { RankingProps } from '../../constants/interfaces';
import * as L from './ListStyle';

interface RankingListProps {
  selectedCompetitionId: number;
  rankings: RankingProps[]; 
}

const RankingLists = ({selectedCompetitionId, rankings} : RankingListProps) => {
  // const rankings = useRecoilValue(fetchRankings); 
  const selectedRankings = rankings.filter(rank => rank.id === selectedCompetitionId);

  return (
    <L.Box>
      {/* {rankings.map((rankings, index) => ( */}
      {selectedRankings.map((rankings, index) => (
        <L.List key={index}>
          <L.sub>{rankings.rank}</L.sub>
          <L.sub>{rankings.teamname}</L.sub>
          <L.sub>{rankings.matchesNumber}</L.sub>
          <L.sub>{rankings.win}</L.sub>
          <L.sub>{rankings.undefeat}</L.sub>
          <L.sub> {rankings.defeat}</L.sub>
        </L.List>
      ))}
    </L.Box>
  )
}

export default RankingLists;