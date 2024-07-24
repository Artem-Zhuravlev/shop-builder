import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
import {
	AdminReviewsTable,
	type AdminReviewsTableItem,
	AdminReviewsFilter,
} from '@entities/Admin/ui/reviews';

export default function ReviewsPage() {
	const nodes: AdminReviewsTableItem[] = [
		{
			id: 1,
			product: 'Samsung Galaxy Tab 10.1',
			author: 'John Doe',
			rating: 3,
			status: 'disabled',
			date_added: '2024-04-10',
			slug: 'samsung-tab-1',
		},
		{
			id: 2,
			product: 'Apple iPad Air',
			author: 'Jane Smith',
			rating: 4,
			status: 'enabled',
			date_added: '2024-05-12',
			slug: 'apple-ipad-2',
		},
		{
			id: 3,
			product: 'Google Pixel Slate',
			author: 'Robert Brown',
			rating: 5,
			status: 'disabled',
			date_added: '2024-03-15',
			slug: 'google-pixel-3',
		},
		{
			id: 4,
			product: 'Microsoft Surface Pro',
			author: 'Alice Johnson',
			rating: 4,
			status: 'enabled',
			date_added: '2024-06-20',
			slug: 'microsoft-surface-4',
		},
		{
			id: 5,
			product: 'Amazon Fire HD 10',
			author: 'Charlie Davis',
			rating: 3,
			status: 'disabled',
			date_added: '2024-01-18',
			slug: 'amazon-fire-5',
		},
		{
			id: 6,
			product: 'Lenovo Tab M10',
			author: 'Emily White',
			rating: 4,
			status: 'enabled',
			date_added: '2024-02-22',
			slug: 'lenovo-tab-6',
		},
		{
			id: 7,
			product: 'Huawei MediaPad M5',
			author: 'David Wilson',
			rating: 5,
			status: 'disabled',
			date_added: '2024-07-01',
			slug: 'huawei-mediapad-7',
		},
		{
			id: 8,
			product: 'Asus ZenPad 3S 10',
			author: 'Sophia Martinez',
			rating: 4,
			status: 'enabled',
			date_added: '2024-03-30',
			slug: 'asus-zenpad-8',
		},
		{
			id: 9,
			product: 'Acer Iconia Tab 10',
			author: 'James Garcia',
			rating: 3,
			status: 'disabled',
			date_added: '2024-05-05',
			slug: 'acer-iconia-9',
		},
		{
			id: 10,
			product: 'Sony Xperia Tablet Z4',
			author: 'Mia Thompson',
			rating: 5,
			status: 'enabled',
			date_added: '2024-06-15',
			slug: 'sony-xperia-10',
		},
	];

	return (
		<AdminTableLayout filter={<AdminReviewsFilter />}>
			<AdminReviewsTable nodes={nodes} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Reviews',
};
