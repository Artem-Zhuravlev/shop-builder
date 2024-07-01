import { Meta, StoryFn } from '@storybook/react';
import { AdminOptionsForm } from './AdminOptionsForm';

export default {
  title: 'Entities/Admin/Options/AdminOptionsForm',
  component: AdminOptionsForm,
} as Meta<typeof AdminOptionsForm>;

const Template: StoryFn<typeof AdminOptionsForm> = (args) => {
  return <AdminOptionsForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
