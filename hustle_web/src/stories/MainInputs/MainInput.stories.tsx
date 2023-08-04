import type { Meta, StoryObj } from '@storybook/react';
import MainInput from '../../components/MainInput/MainInput';

const meta = {
  title: 'Components/MainInput/MainInput',
  component: MainInput
} satisfies Meta<typeof MainInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MediumInput: Story = {
  args: {
    type: 'default',
    value: '',
    placeholder: 'Medium 버튼입니다',
    onChange: (value) => {
      console.log('Input value:', value);
    },
    onEnter: () => {
      console.log('Enter key pressed');
    }
  }
};

export const SmallInput: Story = {
  args: {
    type: 'default',
    value: '',
    placeholder: 'Small 버튼입니다',
    small: true,
    onChange: (value) => {
      console.log('Input value:', value);
    },
    onEnter: () => {
      console.log('Enter key pressed');
    }
  }
};
