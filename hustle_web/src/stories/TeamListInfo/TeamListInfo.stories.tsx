import React from 'react';
import { Story, Meta } from '@storybook/react';
import TeamListInfo from '../../components/TeamListInfo/TeamListInfo';

export default {
  title: 'Components/TeamListInfo',
  component: TeamListInfo
} as Meta;

const Template: Story<{ logo: string; name: string }> = (args) => (
  <TeamListInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logo: require('../../assets/images/TeamInfoTest.png'),
  name: '팀 이름'
};
