import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { AdminAuthForgotPassword } from './AdminAuthForgotPassword';

export default {
	title: 'Entities/Admin/AdminAuthForgotPassword',
	component: AdminAuthForgotPassword,
} as Meta<typeof AdminAuthForgotPassword>;

const Template: StoryFn<typeof AdminAuthForgotPassword> = (args) => {
	return <AdminAuthForgotPassword {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
