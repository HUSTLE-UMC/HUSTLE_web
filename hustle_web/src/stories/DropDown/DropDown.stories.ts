import type { Meta, StoryObj } from '@storybook/react';
import { DropDown } from '../../components/DropDown/DropDown';

const meta = {
  title: 'Components/DropDown',
  component: DropDown
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    Items: ['교류전 요청', '초청 요청'],
    index: 1
  }
};
