import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
import { AdminCustomerGroupsTable } from '@entities/Admin';
import { PaginateBase } from '@shared/PaginateBase';

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
