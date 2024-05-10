import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { AdminHeader } from './AdminHeader';

export default {
	title: 'Entities/Admin/AdminHeader',
	component: AdminHeader,
} as Meta<typeof AdminHeader>;

const Template: StoryFn<typeof AdminHeader> = (args) => {
	return <AdminHeader {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
