import React from 'react';
import * as T from './Styles';

const TeamListInfo = ({ logo, name }: { logo: string; name: string }) => {
  return (
    <T.TeamContainer>
      <T.LogoWrap src={logo} alt={`${name} 로고`} />
      <T.NameWrap>{name}</T.NameWrap>
    </T.TeamContainer>
  );
};

export default TeamListInfo;
