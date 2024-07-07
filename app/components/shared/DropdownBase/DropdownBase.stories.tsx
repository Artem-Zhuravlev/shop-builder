import type { Meta, StoryFn } from '@storybook/react';
import { DropdownBase } from './DropdownBase';

export default {
  title: 'Shared/DropdownBase',
  component: DropdownBase,
} as Meta<typeof DropdownBase>;

const Template: StoryFn<typeof DropdownBase> = (args) => {
  return (
    <div style={{ backgroundColor: '#aaa', minHeight: '100vh' }}>
      <DropdownBase {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Dropdown',
  isLightMode: false,
  list: [
    {
      to: '/route1',
      value: 'Dropdown item 1',
    },
    {
      to: '/route2',
      value: 'Dropdown item 2',
    },
    {
      onClick: () => {
        console.log('click');
      },
      value: 'Dropdown item 2',
    },
  ],
  opened: true,
};
