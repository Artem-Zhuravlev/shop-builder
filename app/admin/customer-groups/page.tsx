import React from 'react';
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

	return <AdminCustomerGroupsTable nodes={nodes} />;
}

export const metadata = {
	title: 'Customer groups',
};
