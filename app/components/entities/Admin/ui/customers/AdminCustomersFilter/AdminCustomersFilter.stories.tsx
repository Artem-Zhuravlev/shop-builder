import type { Meta, StoryFn } from '@storybook/react';
import { AdminCustomersFilter } from './AdminCustomersFilter';

export default {
	title: 'Entities/Admin/Customers/AdminCustomersFilter',
	component: AdminCustomersFilter,
} as Meta<typeof AdminCustomersFilter>;

const Template: StoryFn<typeof AdminCustomersFilter> = (args) => {
	return <AdminCustomersFilter {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
