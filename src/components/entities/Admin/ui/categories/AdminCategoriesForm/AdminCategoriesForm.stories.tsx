import type { Meta, StoryFn } from '@storybook/react';
import { AdminCategoriesForm } from './AdminCategoriesForm';

export default {
	title: 'Entities/Admin/Categories/AdminCategoriesForm',
	component: AdminCategoriesForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminCategoriesForm>;

const Template: StoryFn<typeof AdminCategoriesForm> = (args) => {
	return <AdminCategoriesForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
