import { Meta, StoryFn } from '@storybook/react';
import { IconPicture } from './IconPicture';

export default {
  title: 'Shared/Icons/IconPicture',
  component: IconPicture,
} as Meta<typeof IconPicture>;

const Template: StoryFn<typeof IconPicture> = (args) => (
  <IconPicture {...args} />
);

export const Default = Template.bind({});
Default.args = {};
