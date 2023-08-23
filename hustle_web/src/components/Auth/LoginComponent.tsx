import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '../../assets/icons/profile_icon.svg';
import { LoginProps } from '../../constants/interfaces';
import * as H from '../../components/Header/Styles';
import { AuthContext } from './AuthProvider';

interface userProps {
  user: LoginProps;
}

export const LoginComponent = ({ user }: userProps) => {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);

  const handleLogout = () => {
    console.log('로그아웃 클릭실행돼씀');
    logoutHandler();
  };

  return (
    <H.RowContainer>
      <H.LogoutText onClick={() => navigate('/mypage')}>
        마이페이지
      </H.LogoutText>
    </H.RowContainer>
  );
};
