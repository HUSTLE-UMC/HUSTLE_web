import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HeaderIcon } from '../../assets/logos/HeaderLogo';
import * as H from './Styles';
import Colors from '../../styles/Color';
import FONT from '../../styles/Font';
import { NotLoginComponent } from '../Auth/NotLoginComponent';
import { LoginComponent } from '../Auth/LoginComponent';
import { LoginProps } from '../../constants/interfaces';

const Header = () => {
  const navigate = useNavigate();

  // user 상태 정의 (임시로 빈 객체로 초기화)
  const [user, setUser] = useState<LoginProps | null>(null);

  return (
    <H.Header>
      <H.RightContainer>
        <H.RowContainer>
          <H.LogoWrap>
            <HeaderIcon onClick={() => navigate('/')} />
          </H.LogoWrap>
          <H.Gap>
            {user !== null ? (
              <LoginComponent user={user} />
            ) : (
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
        <H.HeaderBtn onClick={() => navigate('/community')}>
          커뮤니티
        </H.HeaderBtn>
        <H.HeaderBtn>순위</H.HeaderBtn>
      </H.BtnWrap>
    </H.Header>
  );
};

export default Header;
