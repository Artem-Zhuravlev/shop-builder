import React from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import { AdminStockStatusTable } from '@/components/entities/Admin';
import { PaginateBase } from '@/components/shared/PaginateBase';

export default function StockStatusesPage() {
	const nodes = [
		{
			id: 1,
			stock_status_name: '2-3 Days',
			slug: '2-3-days',
		},
		{
			id: 2,
			stock_status_name: 'In Stock',
			slug: 'in-stock',
		},
		{
			id: 3,
			stock_status_name: 'Out Of Stock',
			slug: 'out-of-stock',
		},
		{
			id: 4,
			stock_status_name: 'Pre-Order',
			slug: 'pre-order',
		},
	];

	return (
		<AdminTableLayout>
			<AdminStockStatusTable nodes={nodes} />
			<PaginateBase pageCount={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Stock statuses',
};
