import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputRadio } from './InputRadio';

export default {
  title: 'inputs/InputRadio',
  component: InputRadio,
  parameters: {
    actions: {
      handles: ['onChange'],
    },
  },
} as Meta<typeof InputRadio>;

const Template: StoryFn<typeof InputRadio> = (args) => <InputRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    'Label 1',
    'Label 2',
    'Label 3',
  ],
  name: 'radio-group-name'
};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.args = {
  ...Default.args,
  value: 'Label 2'
}