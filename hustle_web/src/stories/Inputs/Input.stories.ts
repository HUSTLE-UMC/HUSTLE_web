import { StoryObj, Meta } from '@storybook/react';
import { Input } from './Input';
import { Icon, iconTypes } from '../Icons/Icon';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Medium: Story = {
  args: {
    size: 'medium',
    type: 'text'
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    type: 'text',
    value: ''
  }
};

export const NumberInput: Story = {
  args: {
    size: 'medium',
    type: 'number'
  }
};
