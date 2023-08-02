import { Meta, StoryObj } from '@storybook/react';
import SportsButton from '../../components/SportsButton/SportsButton';

const meta = {
  title: 'Components/SportsButton',
  component: SportsButton
} satisfies Meta<typeof SportsButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BaseBallBtn: Story = {
  args: {
    label: '야구',
    selected: false,
    onClick: () => {}
  }
};
