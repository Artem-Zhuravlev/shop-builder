import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
import { AdminManufacturersTable } from '@entities/Admin/ui/manufacturers';
import { PaginateBase } from '@shared/PaginateBase';

export default function ManufacturersPage() {
	const nodes = [
		{
			id: 1,
			sort_order: 1,
			manufacturer_name: 'Apple',
			slug: 'apple',
		},
		{
			id: 2,
			sort_order: 2,
			manufacturer_name: 'Canon',
			slug: 'canon',
		},
		{
			id: 3,
			sort_order: 4,
			manufacturer_name: 'Hewlett-Packard',
			slug: 'hewlett-packard',
		},
		{
			id: 4,
			sort_order: 5,
			manufacturer_name: 'HTC',
			slug: 'htc',
		},
		{
			id: 5,
			sort_order: 6,
			manufacturer_name: 'Nikon',
			slug: 'nikon',
		},
		{
			id: 6,
			sort_order: 2,
			manufacturer_name: 'Palm',
			slug: 'palm',
		},
		{
			id: 7,
			sort_order: 4,
			manufacturer_name: 'Sony',
			slug: 'sony',
		},
	];

	return (
		<AdminTableLayout>
			<AdminManufacturersTable nodes={nodes} />
			<PaginateBase pageCount={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Manufacturers',
};
