import React from 'react';
import * as T from './Styles';
import { ReverseNameWrap } from './Styles';

const TeamListInfo = ({ logo, name }: { logo: string; name: string }) => {
  return (
    <T.TeamContainerReverse>
      <T.ReverseNameWrap>{name}</T.ReverseNameWrap>
      <T.LogoWrap src={logo} alt={`${name} 로고`} />
    </T.TeamContainerReverse>
  );
};

export default TeamListInfo;
