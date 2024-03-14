import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputCheckbox } from './InputCheckbox';

export default {
  title: 'inputs/InputCheckbox',
  component: InputCheckbox,
  parameters: {
    actions: {
      handles: ['onChange'],
    },
  },
} as Meta<typeof InputCheckbox>;

const Template: StoryFn<typeof InputCheckbox> = (args) => <InputCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox label',
  id: 'checkbox-1'
};

export const WithChecked = Template.bind({});
WithChecked.args = {
  ...Default.args,
  value: true
};