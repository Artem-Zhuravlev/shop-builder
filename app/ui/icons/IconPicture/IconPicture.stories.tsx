import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { IconPicture } from './IconPicture';

export default {
  title: 'Icons/IconPicture',
  component: IconPicture,
} as Meta<typeof IconPicture>;

const Template: StoryFn<typeof IconPicture> = (args) => <IconPicture {...args} />;

export const Default = Template.bind({});
Default.args = {};

