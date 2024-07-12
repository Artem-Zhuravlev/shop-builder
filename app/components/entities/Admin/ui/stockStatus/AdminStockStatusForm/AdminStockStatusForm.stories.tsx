import type { Meta, StoryFn } from '@storybook/react';
import { AdminStockStatusForm } from './AdminStockStatusForm';

export default {
	title: 'Entities/Admin/Stock Status/AdminStockStatusForm',
	component: AdminStockStatusForm,
} as Meta<typeof AdminStockStatusForm>;

const Template: StoryFn<typeof AdminStockStatusForm> = (args) => {
	return <AdminStockStatusForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
