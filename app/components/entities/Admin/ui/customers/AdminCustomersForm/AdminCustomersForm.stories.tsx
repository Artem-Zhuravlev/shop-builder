import type { Meta, StoryFn } from '@storybook/react';
import { AdminCustomersForm } from './AdminCustomersForm';

export default {
	title: 'Entities/Admin/Customers/AdminProductsForm',
	component: AdminCustomersForm,
} as Meta<typeof AdminCustomersForm>;

const Template: StoryFn<typeof AdminCustomersForm> = (args) => {
	return <AdminCustomersForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
