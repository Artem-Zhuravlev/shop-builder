import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { FooterBase } from './FooterBase';

export default {
  title: 'Layout/FooterBase',
  component: FooterBase,
} as Meta<typeof FooterBase>;

const Template: StoryFn<typeof FooterBase> = (args) => <FooterBase {...args} />;

export const Default = Template.bind({});
Default.args = {};
