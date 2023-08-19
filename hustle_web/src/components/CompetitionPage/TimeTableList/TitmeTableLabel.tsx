import React from 'react';
import { TimeTableProps } from './TimeTableProps';
import * as T from './Styles';

const TimeTableLabel = ({ date }: TimeTableProps) => {
  return (
    <T.LabelContainer>
      <T.LabelTitle>Date: {date}</T.LabelTitle>
    </T.LabelContainer>
  );
};

export default TimeTableLabel;
