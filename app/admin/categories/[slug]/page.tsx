import React from 'react';
import { AdminCategoriesForm } from '@entities/Admin/ui/categories';

export default function CategoriesFormPage({
	params,
}: { params: { slug: string } }) {
	return <AdminCategoriesForm />;
}

export const metadata = {
	title: 'Categories',
};
