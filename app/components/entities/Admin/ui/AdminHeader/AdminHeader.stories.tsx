import type { Meta, StoryFn } from '@storybook/react';
import { AdminHeader } from './AdminHeader';

export default {
  title: 'Entities/Admin/Widgets/AdminHeader',
  component: AdminHeader,
} as Meta<typeof AdminHeader>;

const Template: StoryFn<typeof AdminHeader> = (args) => {
  return <AdminHeader {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
