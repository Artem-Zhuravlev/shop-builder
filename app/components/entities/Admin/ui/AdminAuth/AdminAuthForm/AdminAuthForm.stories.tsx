import type { Meta, StoryFn } from '@storybook/react';
import { AdminAuthForm } from './AdminAuthForm';

export default {
  title: 'Entities/Admin/Auth/AdminAuthForm',
  component: AdminAuthForm,
} as Meta<typeof AdminAuthForm>;

const Template: StoryFn<typeof AdminAuthForm> = (args) => {
  return <AdminAuthForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
