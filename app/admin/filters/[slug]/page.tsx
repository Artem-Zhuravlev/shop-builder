import React from 'react';
import { AdminFiltersForm } from '@/components/entities/Admin';

export default function CategoriesFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminFiltersForm />;
}

export const metadata = {
	title: 'Filters',
};
