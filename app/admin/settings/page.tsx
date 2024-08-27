import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
import { AdminSettingsTable } from '@entities/Admin/ui/settings';
import { PaginateBase } from '@shared/PaginateBase';
import { getApiSettings } from '@shared/api/admin';

export default async function SettingsPage() {
	const nodes = await getApiSettings();

	return (
		<AdminTableLayout>
			<AdminSettingsTable nodes={nodes} />
			<PaginateBase pageCount={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Settings',
};
