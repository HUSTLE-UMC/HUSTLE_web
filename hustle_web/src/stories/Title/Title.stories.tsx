import React from 'react';
import { Story, Meta } from '@storybook/react';
import Title from '../../components/CompetitionInfo/Title/Title';
import { TitleProps } from '../../components/CompetitionInfo/Title/TitleProps';

export default {
  title: 'Components/Title',
  component: Title
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: '대회 제목',
  period: '2023-08-01',
  location: '대회 장소'
};
