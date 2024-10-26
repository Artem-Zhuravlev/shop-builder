import React from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import { AdminZonesFilter, AdminZonesTable } from '@/components/entities/Admin';
import { Paginate } from '@/components/shared/Paginate';

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
			<Paginate total={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Zones',
};
