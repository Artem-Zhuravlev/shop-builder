import React from 'react';
import { AdminOrderStatusForm } from '@entities/Admin/ui/orderStatus';

export default function OrderStatusesFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminOrderStatusForm />;
}

export const metadata = {
	title: 'Order statuses',
};
