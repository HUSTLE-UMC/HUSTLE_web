import * as A from './Styles';
import SportsMenu from '../../SportsMenu/SportsMenu';
import MatchTitle from '../MainMatch/MatchTitle/MatchTitle';
import MatchDetail from '../MatchDetail/MatchDetail';
import { useRecoilValue } from 'recoil';
import OtherMatchList from '../OtherMatchList/OtherMatchList';
import { otherMatchSelector } from '../../../recoil/friendlyMatchPage/selectors';
import { useNavigate } from 'react-router-dom';

const ApplyMatch = () => {
  const otherMatch = useRecoilValue(otherMatchSelector);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/friendly/match');
  };
  return (
    <>
      <SportsMenu />
      <MatchTitle label='교류전 구해요!' />
      <A.ContentLayout>
        <A.SideContainer />
        <MatchDetail />
        <A.SideContainer />
      </A.ContentLayout>
      <A.ListTitle>
        <A.ListText>교류전 구해요!의 다른 글</A.ListText>
        <A.ListButton onClick={() => handleClick()}>더보기 {'>'}</A.ListButton>
      </A.ListTitle>
      <A.ListLayout>
        {otherMatch.map((m, i) => {
          if (i < 4) {
            return (
              <OtherMatchList
                key={i}
                id={i}
                sport={m.sport}
                title={m.title}
                img={m.img}
                date={m.date}
              />
            );
          }
        })}
      </A.ListLayout>
    </>
  );
};

export default ApplyMatch;
