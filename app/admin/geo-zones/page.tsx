import React from 'react';
import { AdminGeoZonesTable } from '@entities/Admin/ui/geoZones';

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

	return <AdminGeoZonesTable nodes={nodes} />;
}

export const metadata = {
	title: 'Geo zones',
};
