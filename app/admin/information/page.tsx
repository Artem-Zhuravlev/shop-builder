import React from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import { AdminInformationTable } from '@/components/entities/Admin';
import { Paginate } from '@/components/shared/Paginate';

export default function InformationPage() {
	const nodes = [
		{
			id: 1,
			title: 'About Us',
			sort_order: 1,
			slug: 'about',
		},
		{
			id: 2,
			title: 'Delivery Information',
			sort_order: 2,
			slug: 'delivery',
		},
		{
			id: 3,
			title: 'Privacy Policy',
			sort_order: 3,
			slug: 'privacy',
		},
		{
			id: 4,
			title: 'Terms & Conditions',
			sort_order: 4,
			slug: 'terms',
		},
	];

	return (
		<AdminTableLayout>
			<AdminInformationTable nodes={nodes} />
			<Paginate total={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Information',
};
