import React from 'react';
import { Story, Meta } from '@storybook/react';
import TeamListInfoReverse from '../../components/TeamListInfo/TeamListInfoReverse';

export default {
  title: 'Components/TeamListInfoReverse',
  component: TeamListInfoReverse
} as Meta;

const Template: Story<{ logo: string; name: string }> = (args) => (
  <TeamListInfoReverse {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logo: require('../../assets/images/TeamInfoTest.png'),
  name: '팀 이름'
};
