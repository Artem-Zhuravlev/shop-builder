import React from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import { AdminOrderStatusTable } from '@/components/entities/Admin';
import { PaginateBase } from '@/components/shared/PaginateBase';

export default function OrderStatusesPage() {
	const nodes = [
		{
			id: 1,
			order_status_name: 'Canceled',
			slug: 'canceled',
		},
		{
			id: 2,
			order_status_name: 'Canceled reversal',
			slug: 'canceled_reversal',
		},
		{
			id: 3,
			order_status_name: 'Completed',
			slug: 'completed',
		},
		{
			id: 4,
			order_status_name: 'Denied',
			slug: 'denied',
		},
		{
			id: 5,
			order_status_name: 'Expired',
			slug: 'expired',
		},
		{
			id: 6,
			order_status_name: 'Failed',
			slug: 'failed',
		},
	];

	return (
		<AdminTableLayout>
			<AdminOrderStatusTable nodes={nodes} />
			<PaginateBase pageCount={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Order statuses',
};
