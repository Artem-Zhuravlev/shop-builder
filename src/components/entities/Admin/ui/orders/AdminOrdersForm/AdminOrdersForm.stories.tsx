import type { Meta, StoryFn } from '@storybook/react';
import { AdminOrdersForm } from './AdminOrdersForm';

export default {
	title: 'Entities/Admin/Orders/AdminOrdersForm',
	component: AdminOrdersForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminOrdersForm>;

const Template: StoryFn<typeof AdminOrdersForm> = (args) => {
	return <AdminOrdersForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
