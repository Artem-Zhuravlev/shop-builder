import React from 'react';
import { AdminManufacturersForm } from '@entities/Admin';

export default function ManufacturersFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminManufacturersForm />;
}

export const metadata = {
	title: 'Manufacturers',
};
