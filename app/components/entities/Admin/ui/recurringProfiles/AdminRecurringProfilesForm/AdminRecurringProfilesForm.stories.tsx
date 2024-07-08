import type { Meta, StoryFn } from '@storybook/react';
import { AdminRecurringProfilesForm } from './AdminRecurringProfilesForm';

export default {
  title: 'Entities/Admin/Recurring Profiles/AdminRecurringProfilesForm',
  component: AdminRecurringProfilesForm,
} as Meta<typeof AdminRecurringProfilesForm>;

const Template: StoryFn<typeof AdminRecurringProfilesForm> = (args) => {
  return <AdminRecurringProfilesForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
