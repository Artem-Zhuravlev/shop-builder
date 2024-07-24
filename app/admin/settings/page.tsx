import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
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

	return (
		<AdminTableLayout>
			<AdminSettingsTable nodes={nodes} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Settings',
};
