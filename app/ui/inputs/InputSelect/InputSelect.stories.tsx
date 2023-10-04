import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputSelect } from './InputSelect';

export default {
  title: 'inputs/InputSelect',
  component: InputSelect,
} as Meta<typeof InputSelect>;

const Template: StoryFn<typeof InputSelect> = (args) => <InputSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
};
