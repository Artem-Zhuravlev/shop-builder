import type { Meta, StoryFn } from '@storybook/react';
import { AdminOrdersFilter } from './AdminOrdersFilter';

export default {
  title: 'Entities/Admin/Orders/AdminOrdersFilter',
  component: AdminOrdersFilter,
} as Meta<typeof AdminOrdersFilter>;

const Template: StoryFn<typeof AdminOrdersFilter> = (args) => {
  return <AdminOrdersFilter {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
