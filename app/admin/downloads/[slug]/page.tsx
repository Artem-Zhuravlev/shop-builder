import React from 'react';
import { AdminDownloadsForm } from '@entities/Admin/ui/downloads';

export default function DownloadsFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminDownloadsForm />;
}

export const metadata = {
	title: 'Downloads',
};
