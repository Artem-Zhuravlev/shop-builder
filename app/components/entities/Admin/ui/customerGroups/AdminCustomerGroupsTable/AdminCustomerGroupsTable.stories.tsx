import type { Meta, StoryFn } from '@storybook/react';
import { AdminCustomerGroupsTable } from './AdminCustomerGroupsTable';

export default {
	title: 'Entities/Admin/Customer Groups/AdminCustomerGroupsTable',
	component: AdminCustomerGroupsTable,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminCustomerGroupsTable>;

const Template: StoryFn<typeof AdminCustomerGroupsTable> = (args) => {
	return <AdminCustomerGroupsTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			name: 'Default',
			sort_order: 1,
			slug: 'default',
		},
	],
};
