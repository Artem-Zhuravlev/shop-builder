import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { AdminSidebar } from './AdminSidebar';

export default {
	title: 'Entities/Admin/AdminSidebar',
	component: AdminSidebar,
} as Meta<typeof AdminSidebar>;

const Template: StoryFn<typeof AdminSidebar> = (args) => {
	return (
		<div style={{ maxWidth: 235}}>
			<AdminSidebar {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {};
