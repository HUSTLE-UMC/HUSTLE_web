import React from 'react';
import CompetitionList from '../../components/CompetitionList/CompetitionList';

export default {
  title: 'Components/CometitionList',
  component: CompetitionList,
};

export const Standard = () => (
  <CompetitionList
    title='가톨릭대학교 총장배 대회'
    sports='농구'
    place='가톨릭대학교 체육관'
    date='2023. 07. 20'
    due='2023. 06. 30 ~ 2023. 07. 10'
  />
);
