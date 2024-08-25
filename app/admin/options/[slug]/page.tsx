import React from 'react';
import { AdminOptionsForm } from '@entities/Admin';

export default function OptionsFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminOptionsForm />;
}

export const metadata = {
	title: 'Options',
};
