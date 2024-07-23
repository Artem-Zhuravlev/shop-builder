import type { Meta, StoryFn } from '@storybook/react';
import { AdminCustomersTable } from './AdminCustomersTable';

export default {
	title: 'Entities/Admin/Customers/AdminCustomersTable',
	component: AdminCustomersTable,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminCustomersTable>;

const Template: StoryFn<typeof AdminCustomersTable> = (args) => {
	return <AdminCustomersTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			name: 'John Doe',
			email: 'test@gmail.com',
			customer_group: 'Default',
			date_added: '2024-10-10',
			slug: 'john-doe',
		},
		{
			id: 2,
			name: 'Jane Smith',
			email: 'jane.smith@gmail.com',
			customer_group: 'Premium',
			date_added: '2024-07-12',
			slug: 'jane-smith',
		},
		{
			id: 3,
			name: 'Michael Brown',
			email: 'michael.brown@gmail.com',
			customer_group: 'Default',
			date_added: '2024-06-20',
			slug: 'michael-brown',
		},
		{
			id: 4,
			name: 'Emily Davis',
			email: 'emily.davis@gmail.com',
			customer_group: 'Gold',
			date_added: '2024-05-15',
			slug: 'emily-davis',
		},
		{
			id: 5,
			name: 'David Wilson',
			email: 'david.wilson@gmail.com',
			customer_group: 'Default',
			date_added: '2024-04-10',
			slug: 'david-wilson',
		},
		{
			id: 6,
			name: 'Sarah Johnson',
			email: 'sarah.johnson@gmail.com',
			customer_group: 'Silver',
			date_added: '2024-03-05',
			slug: 'sarah-johnson',
		},
		{
			id: 7,
			name: 'Robert Martinez',
			email: 'robert.martinez@gmail.com',
			customer_group: 'Default',
			date_added: '2024-02-25',
			slug: 'robert-martinez',
		},
		{
			id: 8,
			name: 'Linda Anderson',
			email: 'linda.anderson@gmail.com',
			customer_group: 'Platinum',
			date_added: '2024-01-30',
			slug: 'linda-anderson',
		},
	],
};
