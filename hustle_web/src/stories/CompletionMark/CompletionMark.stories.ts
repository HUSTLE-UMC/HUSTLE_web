import type { Meta, StoryObj } from '@storybook/react';
import { CompletionMark } from '../../components/CompletionMark/CompletionMark';

const meta = {
  title: 'Components/FriendlyMatch/CompletionMark',
  component: CompletionMark
} satisfies Meta<typeof CompletionMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    label: '초청이 완료되었습니다\r!'
  }
};
