import React from 'react';
import { AdminStockStatusForm } from '@/components/entities/Admin';

export default function StockStatusesFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminStockStatusForm />;
}

export const metadata = {
	title: 'Stock statuses',
};
