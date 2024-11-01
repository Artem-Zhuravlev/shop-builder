import React from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import { AdminOptionsTable } from '@/components/entities/Admin';
import { Paginate } from '@/components/shared/Paginate';

export default function OptionsPage() {
	const nodes = [
		{
			id: 1,
			sort_order: 1,
			option_name: 'Checkbox',
			slug: 'checkbox',
		},
		{
			id: 2,
			sort_order: 2,
			option_name: 'Color',
			slug: 'color',
		},
		{
			id: 3,
			sort_order: 4,
			option_name: 'Date',
			slug: 'date',
		},
		{
			id: 4,
			sort_order: 5,
			option_name: 'Date & Time',
			slug: 'date-and-time',
		},
	];

	return (
		<AdminTableLayout>
			<AdminOptionsTable nodes={nodes} />
			<Paginate total={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Options',
};
