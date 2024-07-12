import type { Meta, StoryFn } from '@storybook/react';
import { AdminStockStatusTable } from './AdminStockStatusTable';

export default {
	title: 'Entities/Admin/Stock Status/AdminStockStatusTable',
	component: AdminStockStatusTable,
} as Meta<typeof AdminStockStatusTable>;

const Template: StoryFn<typeof AdminStockStatusTable> = (args) => {
	return <AdminStockStatusTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			stock_status_name: '2-3 Days',
			slug: '2-3-days',
		},
		{
			id: 2,
			stock_status_name: 'In Stock',
			slug: 'in-stock',
		},
		{
			id: 3,
			stock_status_name: 'Out Of Stock',
			slug: 'out-of-stock',
		},
		{
			id: 4,
			stock_status_name: 'Pre-Order',
			slug: 'pre-order',
		},
	],
};
