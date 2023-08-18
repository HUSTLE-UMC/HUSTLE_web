import React from 'react';
import * as T from './Styles';
import { ReverseNameWrap } from './Styles';

const TeamListInfo = ({ logo, name }: { logo: string; name: string }) => {
  return (
    <T.TeamContainer>
      <T.ReverseNameWrap>{name}</T.ReverseNameWrap>
      <T.LogoWrap src={logo} alt={`${name} 로고`} />
    </T.TeamContainer>
  );
};

export default TeamListInfo;
