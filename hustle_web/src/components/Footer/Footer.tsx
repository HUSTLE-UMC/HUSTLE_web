import * as F from './FooterStyles';
import React from 'react';
import logo from '../../assets/icons/header_logo.svg'

const FooterComponent = () => {
  return (
    <>
    <F.Footer>
      <F.Box>
      <F.LogoWrapper src = {logo} alt='logo'/>
      <F.LogoText>HUSTLE</F.LogoText>
      </F.Box>
      <F.TextWrapper>
      <F.Text>개인정보 처리 방침</F.Text>
      <F.Line></F.Line>
      <F.Text>TEAM HUSTLE</F.Text>
      </F.TextWrapper>
    </F.Footer>
  </>
  )
}
export default FooterComponent;
