import type { Meta, StoryFn } from '@storybook/react';
import { AdminOrderStatusTable } from './AdminOrderStatusTable';

export default {
	title: 'Entities/Admin/Order Status/AdminOrderStatusTable',
	component: AdminOrderStatusTable,
} as Meta<typeof AdminOrderStatusTable>;

const Template: StoryFn<typeof AdminOrderStatusTable> = (args) => {
	return <AdminOrderStatusTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			order_status_name: 'Canceled',
			slug: 'canceled',
		},
		{
			id: 2,
			order_status_name: 'Canceled reversal',
			slug: 'canceled_reversal',
		},
		{
			id: 3,
			order_status_name: 'Completed',
			slug: 'completed',
		},
		{
			id: 4,
			order_status_name: 'Denied',
			slug: 'denied',
		},
		{
			id: 5,
			order_status_name: 'Expired',
			slug: 'expired',
		},
		{
			id: 6,
			order_status_name: 'Failed',
			slug: 'failed',
		},
	],
};
