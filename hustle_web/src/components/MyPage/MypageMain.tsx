import { useRecoilState } from 'recoil';
import * as M from './MypageStyle'
import { profileState, clubsState, securitySettingsState } from '../../recoil/MypageForm/MypageAtom';
import Sidebar from './Sidebar';

const MypageMain = () => {
  const [profile, setProfile] = useRecoilState(profileState);
  const [clubs, setClubs] = useRecoilState(clubsState);
  const [security, setSecurity] = useRecoilState(securitySettingsState);

  return (
    <M.Box>
      <Sidebar/>
    </M.Box>
  )
}

export default MypageMain;