import { useNavigate } from 'react-router-dom';
import * as H from '../../components/Header/Styles';

export const NotLoginComponent = () => {
  const navigate = useNavigate();
  return <H.LogoutText onClick={() => navigate('/login')}>로그인</H.LogoutText>;
};
