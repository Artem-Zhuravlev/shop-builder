import React from 'react';
import { AdminSettingsForm } from '@entities/Admin/ui/settings';

export default function ReviewsFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminSettingsForm />;
}

export const metadata = {
	title: 'Settings',
};
