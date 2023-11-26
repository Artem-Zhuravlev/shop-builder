import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { HeaderBase } from './HeaderBase';

export default {
  title: 'Header',
  component: HeaderBase,
} as Meta<typeof HeaderBase>;

const Template: StoryFn<typeof HeaderBase> = (args) => <HeaderBase {...args} />;

export const Default = Template.bind({});
Default.args = {
};
