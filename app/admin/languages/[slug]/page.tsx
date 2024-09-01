import React from 'react';
import { AdminLanguagesForm } from '@/components/entities/Admin';

export default function LanguagesFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminLanguagesForm />;
}

export const metadata = {
	title: 'Languages',
};
