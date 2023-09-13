import { useNavigate, useLocation } from 'react-router-dom';
import { useMemo, useState, useEffect, useContext } from 'react';
import { HeaderIcon } from '../../assets/logos/HeaderLogo';
import * as H from './Styles';
import Colors from '../../styles/Color';
import FONT from '../../styles/Font';
import { NotLoginComponent } from '../Auth/NotLoginComponent';
import { LoginComponent } from '../Auth/LoginComponent';
import { LoginProps } from '../../constants/interfaces';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../recoil/login/login';
import { AuthContext, AuthProvider } from '../Auth/AuthProvider';

const Header = () => {
  const navigate = useNavigate();

  // user 상태 정의 (임시로 빈 객체로 초기화)
  // const [user, setUser] = useState<LoginProps | null>(null);
  const user = useRecoilValue<LoginProps>(userAtom);
  const {logoutHandler, isLoggedIn} = useContext(AuthContext);

  const handleLogout = () => {
    console.log('로그아웃 클릭실행돼씀');
    logoutHandler();
  };

  const MypageHandler = () => {
    navigate('/mypage');
  };

  console.log(isLoggedIn);

  return (
    <H.Header>
      <H.RightContainer>
        <H.RowContainer>
          <H.LogoWrap>
            <HeaderIcon onClick={() => navigate('/')} />
          </H.LogoWrap>
          <H.Gap>
            {isLoggedIn ? (
              <div>
                <H.Button onClick={MypageHandler}>마이페이지</H.Button>
                <H.Button onClick={handleLogout}>로그아웃</H.Button>
              </div> ) : (
              <NotLoginComponent />
            )}
          </H.Gap>
        </H.RowContainer>
      </H.RightContainer>

      <H.BtnWrap>
        <H.HeaderBtn onClick={() => navigate('/')}>홈</H.HeaderBtn>
        <H.HeaderBtn onClick={() => navigate('/competitions')}>
          대회
        </H.HeaderBtn>
        <H.HeaderBtn onClick={() => navigate('/friendly')}>교류전</H.HeaderBtn>
        <H.HeaderBtn onClick={() => navigate('/club')}>
          동아리
        </H.HeaderBtn>
        <H.HeaderBtn onClick={() => navigate('/ranking')}>순위</H.HeaderBtn>
      </H.BtnWrap>
    </H.Header>
  );
};

export default Header;
