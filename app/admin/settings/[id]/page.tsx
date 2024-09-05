import React from 'react';
import { AdminSettingsForm } from '@/components/entities/Admin/ui/settings';
import { getApiSettingsById } from '@/components/shared/api/admin';

export default async function SettingsFormPage({
	params,
}: { params: { id: number | string } }) {
	const initialValues =
		params.id !== 'new' ? await getApiSettingsById(Number(params.id)) : null;

	return <AdminSettingsForm id={params.id} initialValues={initialValues} />;
}

export const metadata = {
	title: 'Settings',
};
