import type { Meta, StoryFn } from '@storybook/react';
import { AdminReturnsForm } from './AdminReturnsForm';

export default {
	title: 'Entities/Admin/Returns/AdminReturnsForm',
	component: AdminReturnsForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminReturnsForm>;

const Template: StoryFn<typeof AdminReturnsForm> = (args) => {
	return <AdminReturnsForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
