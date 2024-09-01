import type { Meta, StoryFn } from '@storybook/react';
import { AdminAuthForgotPassword } from './AdminAuthForgotPassword';

export default {
	title: 'Entities/Admin/Auth/AdminAuthForgotPassword',
	component: AdminAuthForgotPassword,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminAuthForgotPassword>;

const Template: StoryFn<typeof AdminAuthForgotPassword> = (args) => {
	return <AdminAuthForgotPassword {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
