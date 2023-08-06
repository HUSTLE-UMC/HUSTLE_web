import * as P from './Styles';
import MainMatch from '../../components/FriendlyMatchPage/MainMatch/MainMatch';
import SportsMenu from '../../components/SportsMenu/SportsMenu';

const FriendlyMatch = () => {
  return (
    <>
      <P.PageLayout>
        <SportsMenu />
        <MainMatch />
      </P.PageLayout>
    </>
  );
};

export default FriendlyMatch;
