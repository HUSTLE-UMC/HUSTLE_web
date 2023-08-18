import React from 'react';
import { TimeTableProps } from './TimeTableProps';
import * as T from './Styles';

interface TimeTableLabelProps {
  timeTable: TimeTableProps;
}

const TimeTableLabel: React.FC<TimeTableLabelProps> = ({ timeTable }) => {
  return (
    <T.LabelContainer>
      <T.LabelTitle>Date: {timeTable.date}</T.LabelTitle>
    </T.LabelContainer>
  );
};

export default TimeTableLabel;
