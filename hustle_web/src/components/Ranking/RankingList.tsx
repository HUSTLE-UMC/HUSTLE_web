import { RankingProps } from '../../constants/interfaces';
import * as L from './ListStyle';
import TeamListInfo from '../TeamListInfo/TeamListInfo';

interface RankingListProps {
  rankings: RankingProps; 
}

const RankingLists = ({rankings} : RankingListProps) => {
  // const rankings = useRecoilValue(fetchRankings);
  return (
    <L.Box>
      {/* {rankings.map((rankings, index) => ( */}
        <L.List>
          <L.sub2>{rankings.rank}</L.sub2>
          <L.sub1><TeamListInfo logo={rankings.logo} name={rankings.teamname}/></L.sub1>
          <L.sub>{rankings.matchesNumber}</L.sub>
          <L.sub>{rankings.win}</L.sub>
          <L.sub>{rankings.undefeat}</L.sub>
          <L.sub> {rankings.defeat}</L.sub>
        </L.List>
    </L.Box>
  )
}

export default RankingLists;