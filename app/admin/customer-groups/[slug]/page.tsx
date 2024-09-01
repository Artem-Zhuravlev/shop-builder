import React from 'react';
import { AdminCustomerGroupsForm } from '@/components/entities/Admin';

export default function CustomerGroupsFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminCustomerGroupsForm />;
}

export const metadata = {
	title: 'Customer groups',
};
