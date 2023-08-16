import DropDown from '../../DropDown/DropDown';
import * as M from './Styles';
import SportsMenu from '../../SportsMenu/SportsMenu';
import MatchForm from './MatchForm';
import InvitationForm from './InvitationForm';
import { friendlyMenuSelector } from '../../../recoil/friendlyMatchPage/selectors';
import { useRecoilValue } from 'recoil';

export const PostMatch = () => {
  const matchId = useRecoilValue(friendlyMenuSelector);
  return (
    <>
      <SportsMenu />
      <M.PostLayout>
        <M.SideContainer>
          <DropDown />
        </M.SideContainer>
        {matchId === 0 ? <MatchForm /> : <InvitationForm />}
        <M.SideContainer />
      </M.PostLayout>
    </>
  );
};

export default PostMatch;
