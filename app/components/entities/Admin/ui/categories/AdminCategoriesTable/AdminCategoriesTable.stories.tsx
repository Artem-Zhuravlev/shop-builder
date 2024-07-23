import type { Meta, StoryFn } from '@storybook/react';
import { AdminCategoriesTable } from './AdminCategoriesTable';

export default {
	title: 'Entities/Admin/Categories/AdminCategoriesTable',
	component: AdminCategoriesTable,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminCategoriesTable>;

const Template: StoryFn<typeof AdminCategoriesTable> = (args) => {
	return <AdminCategoriesTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
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
	],
};
