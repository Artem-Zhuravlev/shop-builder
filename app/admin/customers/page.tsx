import React from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import {
	AdminCustomersTable,
	AdminCustomersFilter,
} from '@/components/entities/Admin';
import { Paginate } from '@/components/shared/Paginate';

export default function CustomersPage() {
	const nodes = [
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
	];

	return (
		<AdminTableLayout filter={<AdminCustomersFilter />}>
			<AdminCustomersTable nodes={nodes} />
			<Paginate total={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Customers',
};
