import React from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import {
	AdminSettingsTable,
	type AdminSettingsTableItem,
} from '@/components/entities/Admin/ui/settings';
import { PaginateBase } from '@/components/shared/PaginateBase';
import { getApiSettings } from '@/components/shared/api/admin';

export default async function SettingsPage() {
	const nodes: AdminSettingsTableItem[] = await getApiSettings();

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
