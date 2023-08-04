import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button', // 스토리 분류
  component: Button
} as Meta;

const Template: Story = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = { variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary' };
