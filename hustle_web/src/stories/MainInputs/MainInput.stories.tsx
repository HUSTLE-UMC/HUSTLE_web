import React from 'react';
import { Story, Meta } from '@storybook/react';
import MainInput, { InputProps } from './MainInput';

export default {
  title: 'Components/MainInput',
  component: MainInput
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
