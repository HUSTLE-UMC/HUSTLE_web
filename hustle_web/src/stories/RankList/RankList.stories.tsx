import React from 'react';
import type { Meta, Story } from '@storybook/react';
import RankList from '../../components/RankList/RankList';
import { RankListProps } from '../../components/RankList/RankListProps';

export default {
  title: 'Components/RankList',
  component: RankList
} as Meta<typeof RankList>;

const Template: Story<RankListProps> = (args) => <RankList {...args} />;

export const Example = Template.bind({});
Example.args = {
  rank: 1,
  logo: 'https://example.com/logo.png',
  name: '바스타즈',
  matches: 10,
  wins: 7,
  draws: 2,
  losses: 1,
  goalDifference: 15
};
