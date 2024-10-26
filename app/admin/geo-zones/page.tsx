import React from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import { AdminGeoZonesTable } from '@/components/entities/Admin';
import { Paginate } from '@/components/shared/Paginate';

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
			<Paginate total={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Geo zones',
};
