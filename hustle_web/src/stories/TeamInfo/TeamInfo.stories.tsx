import React from 'react';
import { Story, Meta } from '@storybook/react';
import TeamInfo from '../../components/TeamInfo/TeamInfo';

export default {
  title: 'Components/TeamInfo',
  component: TeamInfo
} as Meta;

const Template: Story<{ logo: string; name: string }> = (args) => (
  <TeamInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logo: require('../../assets/images/TeamInfoTest.png'),
  name: '팀 이름'
};
