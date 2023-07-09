import React from 'react';
import {GapContainer, HamburgerContainer, HeaderContainer, LogoContainer, LogoText, LogoWrapper, Nav, NavTextbox, ProfileBtn, ProfileContainer, ProfileImage, RightContainer, SVGWrapper, UserName} from './styles';
import logo from './header_logo.svg'
import profile from './profile_icon.svg'
import hamburger from './hamburger_icon.svg'
import { Link } from 'react-router-dom';

type NavItem = {
    title:string;
    path: string;
};

const navigationItems: NavItem[]=[
    //링크는 임의 설정
    {title: 'Home', path: '/'},
    {title: 'Competition', path: '/competition'},
    {title: 'Friendly\nmatch', path: '/match'},
    {title: 'Community', path: '/community'},
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
                        <Link to="/my-page">
                            <ProfileContainer>
                                <SVGWrapper>
                                    <ProfileImage src = {profile} alt = 'profile'/>
                                </SVGWrapper>
                                <UserName>한은경</UserName>
                            </ProfileContainer>
                        </Link>
                    </ProfileBtn>
                    <HamburgerContainer src = {hamburger} alt = 'hamburgericon'/>
                </RightContainer>
            </GapContainer>
        </HeaderContainer>
    )
}


export default Header;
