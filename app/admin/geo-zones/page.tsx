import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
import { AdminGeoZonesTable } from '@entities/Admin';
import { PaginateBase } from '@shared/PaginateBase';

export default function StockStatusesPage() {
	const nodes = [
		{
			id: 1,
			geo_zone_name: 'English',
			description: 'English language',
			slug: 'english',
		},
		{
			id: 2,
			geo_zone_name: 'Ukrainian',
			description: 'Ukrainian language',
			slug: 'ukrainian',
		},
	];

	return (
		<AdminTableLayout>
			<AdminGeoZonesTable nodes={nodes} />
			<PaginateBase pageCount={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Geo zones',
};
