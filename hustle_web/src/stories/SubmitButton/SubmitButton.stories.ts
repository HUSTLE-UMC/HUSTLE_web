import type { Meta, StoryObj } from '@storybook/react';
import { SubmitButton } from '../../components/FriendlyMatchPage/SubmitButton/SubmitButton';

const meta = {
  title: 'Components/FriendlyMatch/SubmitButton',
  component: SubmitButton
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Submit1: Story = {
  args: {
    label: '게시하기',
    onClick: () => {}
  }
};

export const Small: Story = {
  args: {
    label: '더 보기',
    small: true,
    onClick: () => {}
  }
};
