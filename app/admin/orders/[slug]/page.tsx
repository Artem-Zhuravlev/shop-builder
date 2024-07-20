import React from 'react';
import { AdminOrdersForm } from '@entities/Admin/ui/orders';

export default function OrdersFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminOrdersForm />;
}

export const metadata = {
	title: 'Orders',
};
