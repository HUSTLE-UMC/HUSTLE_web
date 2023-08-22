import { useSetRecoilState } from 'recoil';
import MainMatch from '../../components/FriendlyMatchPage/MainMatch/MainMatch';
import SportsMenu from '../../components/SportsMenu/SportsMenu';
import { matchListsState } from '../../recoil/friendlyMatchPage/states';
import { useEffect } from 'react';
import axios from 'axios';

const FriendlyMatch = () => {
  const setMatch = useSetRecoilState(matchListsState);

  useEffect(() => {
    axios
      .get(
        'https://api.sport-hustle.com/api/friendMatchingPosts?sport_event_id=2&type=INVITE&page=0&size=100&sort=startDate',
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
          }
        }
      )
      .then((response) => {
        setMatch(response.data.content);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <>
        <SportsMenu />
        <MainMatch />
      </>
    </>
  );
};

export default FriendlyMatch;
