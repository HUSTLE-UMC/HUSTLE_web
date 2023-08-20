import React from 'react';
import { Story, Meta } from '@storybook/react';
import TimeTableList from '../../../components/CompetitionPage/TimeTableList/TimeTableList';
import { TimeTableProps } from '../../../components/CompetitionPage/TimeTableList/TimeTableProps';
import TeamInfoTest from '../../../assets/images/TeamInfoTest.png';

export default {
  title: 'Components/TimeTableList',
  component: TimeTableList
} as Meta;

const Template: Story<TimeTableProps> = (args) => <TimeTableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  time: '17:00',
  matchName: 'A조 1경기',
  team1: '바스타즈',
  team2: '바스타즈',
  score: '43:19'
};
