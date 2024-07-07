import type { Meta, StoryFn } from '@storybook/react';
import { IconUser } from './IconUser';

export default {
  title: 'Shared/Icons/IconUser',
  component: IconUser,
} as Meta<typeof IconUser>;

const Template: StoryFn<typeof IconUser> = (args) => <IconUser {...args} />;

export const Default = Template.bind({});
Default.args = {};
