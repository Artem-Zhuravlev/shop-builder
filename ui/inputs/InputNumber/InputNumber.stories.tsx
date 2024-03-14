import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputNumber } from './InputNumber';

export default {
  title: 'inputs/InputNumber',
  component: InputNumber,
  argTypes: { onNumberChange: { action: 'number change' } }
} as Meta<typeof InputNumber>;

const Template: StoryFn<typeof InputNumber> = (args) => <InputNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 10
};

