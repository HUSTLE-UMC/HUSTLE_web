import React from 'react';
import type { Meta, Story } from '@storybook/react';
import MatchButton from '../../components/MatchButton/MatchButton';
import { MatchButtonProps } from '../../components/MatchButton/MatchButtonProps';

export default {
  title: 'Components/MatchButton',
  component: MatchButton
} as Meta<typeof MatchButton>;

const Template: Story<MatchButtonProps> = (args) => <MatchButton {...args} />;

export const BigButton = Template.bind({});
BigButton.args = {
  type: 'big',
  label: '신청하기',
  onClick: () => alert('Big button clicked')
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  type: 'small',
  label: '신청하기',
  onClick: () => alert('Small button clicked')
};
