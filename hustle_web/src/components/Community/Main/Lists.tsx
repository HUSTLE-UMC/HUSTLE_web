import MatchLists from './MatchList';
import ClubMain from '../Club/ClubMain';

const Community = () => {
  if (window.location.pathname === '/community/question')
    return (
      <div>
        <MatchLists />
      </div>
    );
  if (window.location.pathname === '/community/club')
    return (
      <div>
        <ClubMain />
      </div>
    );
  else return <></>;
}

export default Community;