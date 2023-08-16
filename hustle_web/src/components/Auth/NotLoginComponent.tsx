import { useNavigate } from 'react-router-dom';
import * as H from '../../components/Header/Styles';

export const NotLoginComponent = () => {
  const navigate = useNavigate();
  return (
    <H.RowContainer>
      <H.LogoutText onClick={() => navigate('/signIn')}>회원가입</H.LogoutText>
      <H.LogoutText onClick={() => navigate('/login')}>로그인</H.LogoutText>
    </H.RowContainer>
  );
};
