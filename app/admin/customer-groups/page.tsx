import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
import { AdminCustomerGroupsTable } from '@entities/Admin/ui/customerGroups';

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
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Customer groups',
};
