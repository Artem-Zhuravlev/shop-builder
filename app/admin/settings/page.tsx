import React from 'react';
import { AdminSettingsTable } from '@entities/Admin/ui/settings';

export default function ReviewsPage() {
	const nodes = [
		{
			id: 1,
			store_name: 'Your Store (Default)',
			store_url: 'https://test.com',
			slug: 'default',
		},
	];

	return <AdminSettingsTable nodes={nodes} />;
}

export const metadata = {
	title: 'Settings',
};
