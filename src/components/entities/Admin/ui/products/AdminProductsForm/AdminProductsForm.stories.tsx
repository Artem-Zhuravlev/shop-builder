import type { Meta, StoryFn } from '@storybook/react';
import { AdminProductsForm } from './AdminProductsForm';

export default {
	title: 'Entities/Admin/Products/AdminProductsForm',
	component: AdminProductsForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminProductsForm>;

const Template: StoryFn<typeof AdminProductsForm> = (args) => {
	return <AdminProductsForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
