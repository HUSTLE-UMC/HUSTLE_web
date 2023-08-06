import * as S from './Styles';
import MatchLists from './FriendlyLists/MatchLists';
import InvitationLists from './FriendlyLists/InvitationLists';
import SubmitButton from '../SubmitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';

export const MainMatch = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Layout>
        <S.Container>
          <MatchLists />
        </S.Container>
        <S.ButtonBox>
          <SubmitButton
            label='더 보기'
            small
            onClick={() => {
              navigate('/friendly/match');
            }}
          />
        </S.ButtonBox>
        <S.Container>
          <InvitationLists />
        </S.Container>
        <S.ButtonBox>
          <SubmitButton
            label='더 보기'
            small
            onClick={() => {
              navigate('/friendly/invite');
            }}
          />
        </S.ButtonBox>
      </S.Layout>
    </>
  );
};

export default MainMatch;
