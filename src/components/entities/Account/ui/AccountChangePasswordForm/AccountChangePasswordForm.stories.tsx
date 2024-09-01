import type { Meta, StoryFn } from '@storybook/react';
import { AccountChangePasswordForm } from './AccountChangePasswordForm';

export default {
	title: 'Entities/Account/AccountChangePasswordForm',
	component: AccountChangePasswordForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AccountChangePasswordForm>;

const Template: StoryFn<typeof AccountChangePasswordForm> = (args) => {
	return <AccountChangePasswordForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
