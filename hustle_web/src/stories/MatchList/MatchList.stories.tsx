import React from 'react';
import type { Meta, Story } from '@storybook/react';
import MatchList from '../../components/MatchList/MatchList';
import { MatchListProps } from '../../components/MatchList/MatchListProps';

export default {
  title: 'Components/MatchList',
  component: MatchList
} as Meta;

const Template: Story<{ contests: MatchListProps[] }> = (args) => (
  <MatchList {...args} />
);

export const Example: Story<{ contests: MatchListProps[] }> = Template.bind({});
Example.args = {
  contests: [
    {
      label: '모집 중',
      name: '대회 A',
      period: '2023-08-01 ~ 2023-08-15'
    },
    {
      label: '진행 중',
      name: '대회 B',
      period: '2023-08-10 ~ 2023-08-20'
    }
    // 추가적인 대회 정보 추가 가능
  ]
};
