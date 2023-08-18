import React from 'react';
import * as L from './Styles';
import { Props } from './MatchListProps';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedMatchID } from '../../../recoil/friendlyMatchPage/states';
import { friendlyMenuSelector } from '../../../recoil/friendlyMatchPage/selectors';

export const FriendlyMatchList = ({
  id,
  sport,
  title,
  location,
  date,
  clubName
}: Props) => {
  const navigate = useNavigate();
  const menu = useRecoilValue(friendlyMenuSelector);
  const setMatchID = useSetRecoilState(selectedMatchID);
  const handleClick = (id: number) => {
    setMatchID(id), navigate('/friendly/apply');
  };
  return (
    <L.Layout key={id}>
      <L.Sport>{sport}</L.Sport>
      <L.Date> {date}</L.Date>
      <L.Title onClick={() => handleClick(id)}>{title}</L.Title>
      {menu === 0 ? (
        <L.Location>{location}</L.Location>
      ) : (
        <L.Location>{clubName}</L.Location>
      )}
    </L.Layout>
  );
};

export default FriendlyMatchList;
