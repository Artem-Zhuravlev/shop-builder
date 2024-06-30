import { Meta, StoryFn } from '@storybook/react';
import { AdminAttributeGroupForm } from './AdminAttributeGroupForm';

export default {
  title: 'Entities/Admin/Attributes/AdminAttributeGroupForm',
  component: AdminAttributeGroupForm,
} as Meta<typeof AdminAttributeGroupForm>;

const Template: StoryFn<typeof AdminAttributeGroupForm> = (args) => {
  return <AdminAttributeGroupForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
