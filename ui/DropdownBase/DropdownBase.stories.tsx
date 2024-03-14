import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DropdownBase } from './DropdownBase';

export default {
  title: 'Dropdown/DropdownBase',
  component: DropdownBase,
} as Meta<typeof DropdownBase>;

const Template: StoryFn<typeof DropdownBase> = (args) => {
  return (
    <div style={{ backgroundColor: '#aaa', minHeight: '100vh' }}>
      <DropdownBase {...args} />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  children: 'Dropdown',
  isLightMode: false,
  list: [
    {
      route: '/route1',
      value: 'Dropdown item 1'
    },
    {
      route: '/route2',
      value: 'Dropdown item 2'
    }
  ]
};