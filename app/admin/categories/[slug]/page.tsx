import React from 'react';
import { AdminCategoriesForm } from '@entities/Admin';

export default function CategoriesFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminCategoriesForm />;
}

export const metadata = {
	title: 'Categories',
};
