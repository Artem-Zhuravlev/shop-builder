import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputTextarea } from './InputTextarea';

export default {
  title: 'inputs/InputTextarea',
  component: InputTextarea,
} as Meta<typeof InputTextarea>;

const Template: StoryFn<typeof InputTextarea> = (args: any) => <InputTextarea {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Some string',
  placeholder: 'Please add text',
  disabled: false,
  name: 'textarea-name',
  id: 'textarea-1'
};
