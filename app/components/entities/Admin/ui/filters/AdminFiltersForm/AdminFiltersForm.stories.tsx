import type { Meta, StoryFn } from '@storybook/react';
import { AdminFiltersForm } from './AdminFiltersForm';

export default {
  title: 'Entities/Admin/Filters/AdminFiltersForm',
  component: AdminFiltersForm,
} as Meta<typeof AdminFiltersForm>;

const Template: StoryFn<typeof AdminFiltersForm> = (args) => {
  return <AdminFiltersForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
