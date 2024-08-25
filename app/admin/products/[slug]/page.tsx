import React from 'react';
import { AdminProductsForm } from '@entities/Admin';

export default function ProductsFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminProductsForm />;
}

export const metadata = {
	title: 'Products',
};
