import type { Meta, StoryFn } from '@storybook/react';
import { AdminCustomerGroupsForm } from './AdminCustomerGroupsForm';

export default {
	title: 'Entities/Admin/Customer Groups/AdminCustomerGroupsForm',
	component: AdminCustomerGroupsForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminCustomerGroupsForm>;

const Template: StoryFn<typeof AdminCustomerGroupsForm> = (args) => {
	return <AdminCustomerGroupsForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
