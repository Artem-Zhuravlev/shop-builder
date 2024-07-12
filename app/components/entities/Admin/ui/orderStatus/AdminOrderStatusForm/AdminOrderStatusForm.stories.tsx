import type { Meta, StoryFn } from '@storybook/react';
import { AdminOrderStatusForm } from './AdminOrderStatusForm';

export default {
	title: 'Entities/Admin/Order Status/AdminOrderStatusForm',
	component: AdminOrderStatusForm,
} as Meta<typeof AdminOrderStatusForm>;

const Template: StoryFn<typeof AdminOrderStatusForm> = (args) => {
	return <AdminOrderStatusForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
