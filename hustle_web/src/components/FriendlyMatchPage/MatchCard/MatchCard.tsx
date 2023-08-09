import React from 'react';
import * as C from './Styles';

const MatchCard = () => {
  return (
    <C.CardWrap>
      <C.Title>가톨릭대학교 바스타즈</C.Title>
      <C.Message>'대회 연습 상대 구해요!'</C.Message>
      <C.Info>
        <div>장소 : 가톨릭대학교 체육관</div>
        <div>일시 : 2023/07/07</div>
      </C.Info>
    </C.CardWrap>
  );
};

export default MatchCard;
