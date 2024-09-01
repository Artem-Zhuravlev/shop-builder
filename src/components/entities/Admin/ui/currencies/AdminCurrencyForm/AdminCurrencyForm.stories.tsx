import type { Meta, StoryFn } from '@storybook/react';
import { AdminCurrencyForm } from './AdminCurrencyForm';

export default {
	title: 'Entities/Admin/Currency/AdminCurrencyForm',
	component: AdminCurrencyForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminCurrencyForm>;

const Template: StoryFn<typeof AdminCurrencyForm> = (args) => {
	return <AdminCurrencyForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
