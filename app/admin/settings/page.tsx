import React from 'react';
import { AdminSettingsTableView } from '@/components/entities/Admin/ui/settings';

export default async function SettingsPage() {
	return <AdminSettingsTableView />;
}

export const metadata = {
	title: 'Settings',
};
