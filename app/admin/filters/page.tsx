import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
import { AdminFiltersTable } from '@entities/Admin/ui/filters';

export default function FiltersPage() {
	const nodes = [
		{
			id: 2,
			sort_order: 2,
			filter_group: 'Color',
			slug: 'red',
		},
		{
			id: 3,
			sort_order: 3,
			filter_group: 'Color',
			slug: 'blue',
		},
		{
			id: 4,
			sort_order: 4,
			filter_group: 'Color',
			slug: 'green',
		},
		{
			id: 5,
			sort_order: 5,
			filter_group: 'Color',
			slug: 'yellow',
		},
		{
			id: 6,
			sort_order: 6,
			filter_group: 'Color',
			slug: 'orange',
		},
		{
			id: 7,
			sort_order: 7,
			filter_group: 'Color',
			slug: 'purple',
		},
		{
			id: 8,
			sort_order: 8,
			filter_group: 'Color',
			slug: 'black',
		},
		{
			id: 9,
			sort_order: 9,
			filter_group: 'Color',
			slug: 'white',
		},
		{
			id: 10,
			sort_order: 10,
			filter_group: 'Color',
			slug: 'pink',
		},
		{
			id: 11,
			sort_order: 11,
			filter_group: 'Color',
			slug: 'grey',
		},
	];

	return (
		<AdminTableLayout>
			<AdminFiltersTable nodes={nodes} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Filters',
};
