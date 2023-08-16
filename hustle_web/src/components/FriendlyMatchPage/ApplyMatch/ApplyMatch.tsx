import * as A from './Styles';
import SportsMenu from '../../SportsMenu/SportsMenu';
import MatchDetail from '../MatchDetail/MatchDetail';
import { friendlyMenuSelector } from '../../../recoil/friendlyMatchPage/selectors';
import { useRecoilValue } from 'recoil';
import { friendlyMenuState } from '../../../recoil/friendlyMatchPage/states';

const ApplyMatch = () => {
  const menu = useRecoilValue(friendlyMenuState);
  const index = useRecoilValue(friendlyMenuSelector);
  return (
    <>
      <SportsMenu disable />
      <A.MenuLayout>
        <A.MenuTitle>{menu[index].label}</A.MenuTitle>
      </A.MenuLayout>
      <A.ContentLayout>
        <A.SideContainer />
        <MatchDetail />
        <A.SideContainer />
      </A.ContentLayout>
    </>
  );
};

export default ApplyMatch;
