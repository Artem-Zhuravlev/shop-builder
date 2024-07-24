import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
import { AdminAttributeGroupTable } from '@entities/Admin/ui/attribute';

export default function AttributeGroupPage() {
	const nodes = [
		{
			id: 1,
			attribute_group_name: 'Memory',
			sort_order: 2,
			slug: 'memory',
		},
		{
			id: 2,
			attribute_group_name: 'Motherboard',
			sort_order: 3,
			slug: 'motherboard',
		},
		{
			id: 3,
			attribute_group_name: 'Processor',
			sort_order: 4,
			slug: 'processor',
		},
		{
			id: 4,
			attribute_group_name: 'Technical',
			sort_order: 1,
			slug: 'technical',
		},
	];

	return (
		<AdminTableLayout>
			<AdminAttributeGroupTable nodes={nodes} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Attribute Groups',
};
