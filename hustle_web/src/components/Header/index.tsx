import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HeaderIcon } from '../../assets/logos/HeaderLogo';
import * as H from './Styles';
import Colors from '../../styles/Color';
import FONT from '../../styles/Font';
import {NotLoginComponent} from '../Auth/NotLoginComponent';
import { LoginComponent } from '../Auth/LoginComponent';
import {LoginProps} from '../../constants/interfaces'

const Header = () => {
    const navigate = useNavigate();
    
    // user 상태 정의 (임시로 빈 객체로 초기화)
    const [user, setUser] = useState<LoginProps | null>(null);
    

    const handleLoginClick = () => {
        if (user) {
          // 로그인 상태일 때는 '/mypage'로 이동
          navigate('/mypage');
        } else {
          // 로그인하지 않은 상태일 때는 '/login'으로 이동
          navigate('/login');
        }
      };


    return (
        <H.Header>
            <H.LogoWrap>
                <HeaderIcon onClick={() => navigate('/')} />
            </H.LogoWrap>
            <H.BtnWrap>
                <H.HeaderBtn onClick={() => navigate('/')}>홈</H.HeaderBtn>
                <H.HeaderBtn onClick={() => navigate('/match')}>대회</H.HeaderBtn>
                <H.HeaderBtn>교류전</H.HeaderBtn>
                <H.HeaderBtn onClick={() => navigate('/community')}>커뮤니티</H.HeaderBtn>
                <H.HeaderBtn>순위</H.HeaderBtn>
                {user !== null ? (
          <LoginComponent user={user} onClick={handleLoginClick} />
        ) : (
          <H.LogoutText><NotLoginComponent onClick={handleLoginClick} /></H.LogoutText>
        )}

            </H.BtnWrap>
        </H.Header>
    );
};

export default Header;
