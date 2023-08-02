import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HeaderIcon } from '../../assets/logos/HeaderLogo';
import * as H from './Styles';
import Colors from '../../styles/Color';
import FONT from '../../styles/Font';
import {NotLoginComponent} from '../Auth/NotLoginComponent';
import { LoginComponent } from '../Auth/LoginComponent';

const Header = () => {
    const navigate = useNavigate();


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
                <H.HeaderBtn onClick={() => navigate('/login')}><LoginComponent/></H.HeaderBtn>
            </H.BtnWrap>
        </H.Header>
    );
};

export default Header;
