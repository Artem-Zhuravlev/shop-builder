import type { Meta, StoryFn } from '@storybook/react';
import { AdminReturnsTable } from './AdminReturnsTable';

export default {
	title: 'Entities/Admin/Returns/AdminReturnsTable',
	component: AdminReturnsTable,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminReturnsTable>;

const Template: StoryFn<typeof AdminReturnsTable> = (args) => {
	return <AdminReturnsTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			return_id: 1,
			order_id: 1,
			customer: 'Kajal Gajbhiye',
			product: 'iMac',
			model: 'Product 15',
			status: 'awaiting_products',
			date_added: '2024-04-05',
		},
		{
			id: 2,
			return_id: 2,
			order_id: 2,
			customer: 'John Doe',
			product: 'MacBook Pro',
			model: 'Product 16',
			status: 'pending',
			date_added: '2024-05-10',
		},
		{
			id: 3,
			return_id: 3,
			order_id: 3,
			customer: 'Jane Smith',
			product: 'iPhone',
			model: 'Product 17',
			status: 'complete',
			date_added: '2024-06-15',
		},
		{
			id: 4,
			return_id: 4,
			order_id: 4,
			customer: 'Michael Brown',
			product: 'iPad',
			model: 'Product 18',
			status: 'complete',
			date_added: '2024-03-20',
		},
		{
			id: 5,
			return_id: 5,
			order_id: 5,
			customer: 'Emily Johnson',
			product: 'Apple Watch',
			model: 'Product 19',
			status: 'awaiting_products',
			date_added: '2024-02-25',
		},
		{
			id: 6,
			return_id: 6,
			order_id: 6,
			customer: 'David Wilson',
			product: 'AirPods',
			model: 'Product 20',
			status: 'pending',
			date_added: '2024-01-30',
		},
		{
			id: 7,
			return_id: 7,
			order_id: 7,
			customer: 'Sophia Lee',
			product: 'HomePod',
			model: 'Product 21',
			status: 'pending',
			date_added: '2024-04-15',
		},
		{
			id: 8,
			return_id: 8,
			order_id: 8,
			customer: 'James Taylor',
			product: 'Apple TV',
			model: 'Product 22',
			status: 'complete',
			date_added: '2024-05-20',
		},
		{
			id: 9,
			return_id: 9,
			order_id: 9,
			customer: 'Olivia Martinez',
			product: 'Mac Mini',
			model: 'Product 23',
			status: 'complete',
			date_added: '2024-06-25',
		},
		{
			id: 10,
			return_id: 10,
			order_id: 10,
			customer: 'William Anderson',
			product: 'Magic Keyboard',
			model: 'Product 24',
			status: 'awaiting_products',
			date_added: '2024-03-05',
		},
		{
			id: 11,
			return_id: 11,
			order_id: 11,
			customer: 'Ava Thomas',
			product: 'Magic Mouse',
			model: 'Product 25',
			status: 'pending',
			date_added: '2024-02-10',
		},
	],
};
