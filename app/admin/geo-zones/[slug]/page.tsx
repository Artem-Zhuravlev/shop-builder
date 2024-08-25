import React from 'react';
import { AdminGeoZonesForm } from '@entities/Admin';

export default function GeoZonesFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminGeoZonesForm />;
}

export const metadata = {
	title: 'Geo zones',
};
