import React from 'react';
import { AdminZonesForm } from '@/components/entities/Admin';

export default function ZonesFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminZonesForm />;
}

export const metadata = {
	title: 'Zones',
};
