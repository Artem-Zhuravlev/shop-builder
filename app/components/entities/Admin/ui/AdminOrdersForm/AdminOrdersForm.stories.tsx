import { Meta, StoryFn } from '@storybook/react';
import { AdminOrdersForm } from './AdminOrdersForm';

export default {
  title: 'Entities/Admin/Orders/AdminOrdersForm',
  component: AdminOrdersForm,
} as Meta<typeof AdminOrdersForm>;

const Template: StoryFn<typeof AdminOrdersForm> = (args) => {
  return <AdminOrdersForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
