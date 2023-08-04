import { useNavigate } from 'react-router-dom';
import Profile from '../../assets/icons/profile_icon.svg';
import { LoginProps } from '../../constants/interfaces';
import * as H from '../../components/Header/Styles';

interface userProps {
  user: LoginProps;
}

export const LoginComponent = ({ user }: userProps) => {
  const navigate = useNavigate();
  return (
    <H.ProfileWrap onClick={() => navigate('/mypage')}>
      <img src={Profile} alt='' />
      <H.ProfileText>{user.username}</H.ProfileText>
    </H.ProfileWrap>
  );
};
