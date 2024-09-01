import React from 'react';
import { AdminCustomersForm } from '@/components/entities/Admin';

export default function CustomersFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminCustomersForm />;
}

export const metadata = {
	title: 'Customers',
};
