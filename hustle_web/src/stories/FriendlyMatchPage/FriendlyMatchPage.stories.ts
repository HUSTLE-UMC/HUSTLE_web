import FriendlyMatch from '../../pages/FriendlyMatch/FriendlyMatch';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pages/FriendlyMatch',
  component: FriendlyMatch
} satisfies Meta<typeof FriendlyMatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
