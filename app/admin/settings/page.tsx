import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
import { AdminSettingsTable } from '@entities/Admin/ui/settings';
import { PaginateBase } from '@shared/PaginateBase';
import { getSettingsController } from 'app/api/settings/getSettingsController';

export default async function SettingsPage() {
	const nodes = await getSettingsController();

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
