import React from 'react';
import { AdminSettingsForm } from '@/components/entities/Admin';

export default async function SettingsPage() {
	return <AdminSettingsForm />;
}

export const metadata = {
	title: 'Settings',
};
