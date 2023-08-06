import React, { useEffect } from 'react';
import * as A from './Styles';
import MatchCard from '../MatchCard/MatchCard';
import MatchRequest from './MatchRequest';
import MatchInvitation from './MatchInvitation';
import CompletionMark from '../../CompletionMark/CompletionMark';
import { useRecoilState, useRecoilValue } from 'recoil';
import { submitMsgSelector } from '../../../recoil/friendlyMatchPage/selectors';
import { selectedState } from '../../../recoil/friendlyMatchPage/states';
import { useLocation } from 'react-router-dom';
import SportsMenu from '../../SportsMenu/SportsMenu';

const ApplyMatch = () => {
  const msg = useRecoilValue(submitMsgSelector);
  const [isSelected, setIsSelected] = useRecoilState(selectedState);
  const location = useLocation();
  const Index = location.state?.index.index;
  useEffect(() => {
    setIsSelected(false);
  }, []);
  return (
    <>
      <SportsMenu />
      <A.Layout>
        <A.TitleLayout>
          {Index === 0 && ' • 교류전 요청'}
          {Index === 1 && ' • 교류전 초청'}
        </A.TitleLayout>
        <A.LeftLayout>
          <MatchCard />
        </A.LeftLayout>
        <A.RightLayout>
          {Index === 0 && <MatchRequest />}
          {Index === 1 && <MatchInvitation />}
        </A.RightLayout>
        {isSelected && (
          <A.SvgLayout>
            <CompletionMark label={msg} />
          </A.SvgLayout>
        )}
      </A.Layout>
    </>
  );
};

export default ApplyMatch;
