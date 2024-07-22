import React from 'react';
import { AdminZonesFilter, AdminZonesTable } from '@entities/Admin/ui/zones';

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
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '3fr 1fr',
				gap: 'var(--size-extra-small)',
				alignItems: 'flex-start',
			}}
		>
			<AdminZonesTable nodes={nodes} />
			<AdminZonesFilter />
		</div>
	);
}

export const metadata = {
	title: 'Zones',
};
