import React from 'react';
import { AdminCustomersForm } from '@entities/Admin/ui/customers';

export default function CategoriesFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminCustomersForm />;
}

export const metadata = {
	title: 'Customers',
};
