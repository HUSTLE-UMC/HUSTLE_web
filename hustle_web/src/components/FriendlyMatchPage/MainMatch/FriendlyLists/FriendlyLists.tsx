import React from 'react';
import SportsMenu from '../../../SportsMenu/SportsMenu';
import InvitationLists from './InvitationLists';
import MatchLists from './MatchLists';

export const FriendlyLists = () => {
  if (window.location.pathname === '/friendly/match')
    return (
      <div>
        <SportsMenu />
        <MatchLists />
      </div>
    );
  if (window.location.pathname === '/friendly/invite')
    return (
      <div>
        <SportsMenu />
        <InvitationLists />
      </div>
    );
  else return <></>;
};

export default FriendlyLists;
