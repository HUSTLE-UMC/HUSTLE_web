import React from 'react';
import { Story, Meta } from '@storybook/react';
import Content from '../../components/CompetitionInfo/Content/Content';
import { ContentProps } from './../../components/CompetitionInfo/Content/ContentProps';

export default {
  title: 'Components/Content',
  component: Content
} as Meta;

const Template: Story<ContentProps> = (args) => <Content {...args} />;

export const Example = Template.bind({});
Example.args = {
  recruitmentPeriod: '2023-08-01 ~ 2023-08-15',
  location: '대회 장소',
  preliminariesFinals: '예선/본선 정보',
  entryFee: '참가비 정보',
  organizer: '주관 정보',
  sponsor: '후원 정보',
  contact: '문의 정보'
};
