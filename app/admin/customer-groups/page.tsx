import React from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import { AdminCustomerGroupsTable } from '@/components/entities/Admin';
import { Paginate } from '@/components/shared/Paginate';

export default function CustomerGroupsPage() {
	const nodes = [
		{
			id: 1,
			name: 'Default',
			sort_order: 1,
			slug: 'default',
		},
	];

	return (
		<AdminTableLayout>
			<AdminCustomerGroupsTable nodes={nodes} />
			<Paginate total={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Customer groups',
};
