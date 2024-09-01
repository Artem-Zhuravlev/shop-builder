import React from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import { AdminCustomerGroupsTable } from '@/components/entities/Admin';
import { PaginateBase } from '@/components/shared/PaginateBase';

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
			<PaginateBase pageCount={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Customer groups',
};
