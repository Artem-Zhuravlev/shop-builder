import React from 'react';
import { AdminCountriesForm } from '@entities/Admin/ui/countries';

export default function CountriesFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminCountriesForm />;
}

export const metadata = {
	title: 'Countries',
};
