import type { Meta, StoryFn } from '@storybook/react';
import { AdminAffiliatesTable } from './AdminAffiliatesTable';
import React from 'react';

export default {
	title: 'Entities/Admin/Affiliates/AdminAffiliatesTable',
	component: AdminAffiliatesTable,
} as Meta<typeof AdminAffiliatesTable>;

const Template: StoryFn<typeof AdminAffiliatesTable> = (args) => {
	return <AdminAffiliatesTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			name: 'John Doe',
			tracking: 'a1b2c3d4e5',
			commission: 4.5,
			balance: 0.25,
			status: 'enabled',
			date_added: '2024-01-15',
			slug: 'john-doe',
		},
		{
			id: 2,
			name: 'Anand simha',
			tracking: '8dff90a9ba',
			commission: 5.0,
			balance: 0.12,
			status: 'enabled',
			date_added: '2024-05-10',
			slug: 'anand-simha',
		},
		{
			id: 3,
			name: 'Jane Smith',
			tracking: 'f6g7h8i9j0',
			commission: 3.0,
			balance: 0.5,
			status: 'disabled',
			date_added: '2024-02-20',
			slug: 'jane-smith',
		},
		{
			id: 4,
			name: 'Bob Johnson',
			tracking: 'k1l2m3n4o5',
			commission: 2.5,
			balance: 0.75,
			status: 'enabled',
			date_added: '2024-03-30',
			slug: 'bob-johnson',
		},
		{
			id: 5,
			name: 'Alice Brown',
			tracking: 'p6q7r8s9t0',
			commission: 6.0,
			balance: 0.2,
			status: 'disabled',
			date_added: '2024-04-25',
			slug: 'alice-brown',
		},
		{
			id: 6,
			name: 'Charlie Davis',
			tracking: 'u1v2w3x4y5',
			commission: 4.0,
			balance: 0.6,
			status: 'enabled',
			date_added: '2024-06-05',
			slug: 'charlie-davis',
		},
		{
			id: 7,
			name: 'Diana Evans',
			tracking: 'z6a7b8c9d0',
			commission: 3.5,
			balance: 0.45,
			status: 'disabled',
			date_added: '2024-07-10',
			slug: 'diana-evans',
		},
		{
			id: 8,
			name: 'Ethan Frank',
			tracking: 'e1f2g3h4i5',
			commission: 5.5,
			balance: 0.3,
			status: 'enabled',
			date_added: '2024-08-15',
			slug: 'ethan-frank',
		},
		{
			id: 9,
			name: 'Grace Hall',
			tracking: 'j6k7l8m9n0',
			commission: 2.0,
			balance: 0.4,
			status: 'disabled',
			date_added: '2024-09-20',
			slug: 'grace-hall',
		},
	],
};
