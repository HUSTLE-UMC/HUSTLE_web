import React from 'react';
import {AlarmWrapper, AlarmImg, GapContainer, HeaderContainer, LogoContainer, LogoText, LogoWrapper, Nav, NavTextbox, ProfileBtn, ProfileContainer, ProfileImage, RightContainer, SVGWrapper, UserName} from './styles';
import logo from '../../assets/icons/header_logo.svg'
import profile from '../../assets/icons/profile_icon.svg'
import { Link } from 'react-router-dom';
import alarm_none from '../../assets/icons/alarm-none_icon.svg'
import alarm_active from '../../assets/icons/alarm-active_icon.svg'
import { NavLink } from 'react-router-dom';

type NavItem = {
    title:string;
    path: string;
};

const navigationItems: NavItem[]=[
    //링크는 임의 설정
    {title: 'Home', path: '/'},
    {title: 'Competition', path: '/Competition'},
    {title: 'Friendly\nmatch', path: '/match'},
    {title: 'Community', path: '/Community'},
    {title: 'About Us', path: '/about'}

];

const Header = () =>{
    return(
        <HeaderContainer>
            <GapContainer>
                <LogoContainer>
                    <LogoWrapper src = {logo} alt='logo'/>
                    <LogoText>HUSTLE</LogoText>
                </LogoContainer>
                <Nav>
                    {navigationItems.map((item, index) => (
                        <NavTextbox key={index} href={item.path} className='NavTextbox'>
                            {item.title}</NavTextbox>
                    ))}
                </Nav>
                <RightContainer>
                    <ProfileBtn>
                        <Link to="/mypage">
                            <ProfileContainer>
                                <SVGWrapper>
                                    <ProfileImage src = {profile} alt = 'profile'/>
                                </SVGWrapper>
                                <UserName>한은경</UserName>
                            </ProfileContainer>
                        </Link>
                    </ProfileBtn>
                    <AlarmWrapper>
                        <AlarmImg src = {alarm_none} alt = 'alarm'/>
                    </AlarmWrapper>
                </RightContainer>
            </GapContainer>
        </HeaderContainer>
    )
}


export default Header;
