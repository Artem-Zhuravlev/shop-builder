import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { FooterSubscribeForm } from './FooterSubscribeForm';

export default {
  title: 'Forms/FooterSubscribeForm',
  component: FooterSubscribeForm,
} as Meta<typeof FooterSubscribeForm>;

const Template: StoryFn<typeof FooterSubscribeForm> = (args) => <FooterSubscribeForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
