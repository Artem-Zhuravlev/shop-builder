import React from 'react';
import { AdminInformationForm } from '@entities/Admin/ui/information';

export default function InformationFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminInformationForm />;
}

export const metadata = {
	title: 'Information',
};
