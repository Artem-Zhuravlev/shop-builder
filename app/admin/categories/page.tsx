import React from 'react';
import { AdminTableLayout } from '@widgets/AdminTableLayout';
import { AdminCategoriesTable } from '@entities/Admin';
import { PaginateBase } from '@shared/PaginateBase';

export default function CategoriesPage() {
	const nodes = [
		{
			id: 1,
			category_name: 'Category 1',
			sort_order: 1,
			slug: 'category-1',
		},
		{
			id: 2,
			category_name: 'Category 2',
			sort_order: 2,
			slug: 'category-2',
		},
		{
			id: 3,
			category_name: 'Category 3',
			sort_order: 3,
			slug: 'category-3',
		},
	];

	return (
		<AdminTableLayout>
			<AdminCategoriesTable nodes={nodes} />
			<PaginateBase pageCount={5} />
		</AdminTableLayout>
	);
}

export const metadata = {
	title: 'Categories',
};
