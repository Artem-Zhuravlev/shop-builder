import React from 'react';
import { AdminAttributesForm } from '@entities/Admin';

export default function AttributesFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminAttributesForm />;
}

export const metadata = {
	title: 'Attributes',
};
