import React from 'react';
import { TimeTableProps } from './TimeTableProps';
import * as T from './Styles';

const TimeTableLabel = ({ date }: Pick<TimeTableProps, 'date'>) => {
  return (
    <T.LabelContainer>
      <T.LabelTitle>{date}</T.LabelTitle>
    </T.LabelContainer>
  );
};

export default TimeTableLabel;
