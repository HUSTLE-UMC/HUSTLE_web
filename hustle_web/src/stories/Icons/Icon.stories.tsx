import { Icon, iconTypes } from './Icon';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Icon,
  title: 'components|Icon'
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const customIcon: Story = {
  args: {
    icon: 'glasses',
    size: '1rem'
  }
};

export const customIcon2: Story = {
  args: {
    icon: 'share',
    size: '1rem'
  }
};

export const customIcon3: Story = {
  args: {
    icon: 'download',
    size: '1rem'
  }
};

export const rightButton: Story = {
  args: {
    icon: 'right',
    size: '1rem'
  }
};

export const listOfIcons = () => {
  return (
    <ul>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  );
};
