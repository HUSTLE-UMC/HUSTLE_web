import React from 'react';
import type { Meta, Story } from '@storybook/react';
import MatchStatus from '../../components/MatchStatus/MatchStatus';

export default {
  title: 'Components/MatchStatus/MatchStatus',
  component: MatchStatus
} as Meta<typeof MatchStatus>;

const Template: Story<typeof MatchStatus> = (args) => <MatchStatus {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  status: 'applying',
  label: '모집 중'
};

export const Example2 = Template.bind({});
Example2.args = {
  status: 'before',
  label: '모집 예정'
};

export const Example3 = Template.bind({});
Example3.args = {
  status: 'ongoing',
  label: '진행 중'
};

export const Example4 = Template.bind({});
Example4.args = {
  status: 'finish',
  label: '종료'
};
