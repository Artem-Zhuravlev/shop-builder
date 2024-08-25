import React from 'react';
import { AdminCurrencyForm } from '@entities/Admin';

export default function CategoriesFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminCurrencyForm />;
}

export const metadata = {
	title: 'Currencies',
};
