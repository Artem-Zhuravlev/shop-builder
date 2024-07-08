import type { Meta, StoryFn } from '@storybook/react';
import { AdminAttributesForm } from './AdminAttributesForm';

export default {
  title: 'Entities/Admin/Attributes/AdminAttributesForm',
  component: AdminAttributesForm,
} as Meta<typeof AdminAttributesForm>;

const Template: StoryFn<typeof AdminAttributesForm> = (args) => {
  return <AdminAttributesForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
