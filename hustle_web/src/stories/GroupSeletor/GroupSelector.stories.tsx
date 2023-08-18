import React from 'react';
import type { Meta, Story } from '@storybook/react';
import GroupSelector from '../../components/GroupSelector/GroupSelector';
import { GroupSelectorProps } from '../../components/GroupSelector/GroupSelectorProps';

export default {
  title: 'Components/GroupSelector',
  component: GroupSelector
} as Meta<typeof GroupSelector>;

const Template: Story<GroupSelectorProps> = (args) => (
  <GroupSelector {...args} />
);

export const Preliminary = Template.bind({});
Preliminary.args = {
  type: 'Preliminary',
  label: '예선',
  onClick: () => alert('clicked')
};

export const Final = Template.bind({});
Final.args = {
  type: 'Finals',
  label: '신청하기',
  onClick: () => alert('clicked')
};
