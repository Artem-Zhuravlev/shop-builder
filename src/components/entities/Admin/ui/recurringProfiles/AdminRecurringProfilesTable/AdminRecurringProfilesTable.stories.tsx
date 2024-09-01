import type { Meta, StoryFn } from '@storybook/react';
import { AdminRecurringProfilesTable } from './AdminRecurringProfilesTable';

export default {
	title: 'Entities/Admin/Recurring Profiles/AdminRecurringProfilesTable',
	component: AdminRecurringProfilesTable,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminRecurringProfilesTable>;

const Template: StoryFn<typeof AdminRecurringProfilesTable> = (args) => {
	return <AdminRecurringProfilesTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			name: 'Loan',
			sort_order: 2,
			slug: 'loan',
		},
		{
			id: 2,
			name: 'Adidas',
			sort_order: 3,
			slug: 'adidas',
		},
		{
			id: 3,
			name: 'Nike',
			sort_order: 4,
			slug: 'nike',
		},
		{
			id: 4,
			name: 'Puma',
			sort_order: 5,
			slug: 'puma',
		},
		{
			id: 5,
			name: 'Reebok',
			sort_order: 6,
			slug: 'reebok',
		},
		{
			id: 6,
			name: 'Under Armour',
			sort_order: 7,
			slug: 'under-armour',
		},
		{
			id: 7,
			name: 'New Balance',
			sort_order: 8,
			slug: 'new-balance',
		},
		{
			id: 8,
			name: 'Asics',
			sort_order: 9,
			slug: 'asics',
		},
		{
			id: 9,
			name: 'Skechers',
			sort_order: 10,
			slug: 'skechers',
		},
		{
			id: 10,
			name: 'Converse',
			sort_order: 11,
			slug: 'converse',
		},
		{
			id: 11,
			name: 'Vans',
			sort_order: 12,
			slug: 'vans',
		},
		{
			id: 12,
			name: 'Fila',
			sort_order: 13,
			slug: 'fila',
		},
		{
			id: 13,
			name: 'Jordan',
			sort_order: 14,
			slug: 'jordan',
		},
	],
};
