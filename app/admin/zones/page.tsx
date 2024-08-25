import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
import { AdminZonesFilter, AdminZonesTable } from '@entities/Admin';
import { PaginateBase } from '@shared/PaginateBase';

export default function ZonesPage() {
	const nodes = [
		{
			id: 1,
			country: 'United Kingdom',
			zone_name: 'London',
			zone_code: 'GB-LND',
			slug: 'london',
		},
		{
			id: 2,
			country: 'Afghanistan',
			zone_name: 'Parwan',
			zone_code: 'AF-PAR',
			slug: 'parwan',
		},
		{
			id: 3,
			country: 'Afghanistan',
			zone_name: 'Kabul',
			zone_code: 'AF-KBL',
			slug: 'kabul',
		},
	];

	return (
		<AdminTableLayout filter={<AdminZonesFilter />}>
			<AdminZonesTable nodes={nodes} />
			<PaginateBase pageCount={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Zones',
};
