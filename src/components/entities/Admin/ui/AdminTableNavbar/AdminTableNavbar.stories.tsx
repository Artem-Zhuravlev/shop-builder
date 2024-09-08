import type { Meta, StoryFn } from '@storybook/react';
import { AdminTableNavbar } from './AdminTableNavbar';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Entities/Admin/Widgets/AdminTableNavbar',
	component: AdminTableNavbar,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminTableNavbar>;

const Template: StoryFn<typeof AdminTableNavbar> = (args) => {
	return <AdminTableNavbar {...args} onDelete={action('delete')} />;
};

export const Default = Template.bind({});
Default.args = {
	id: 12,
	title: 'Settings',
	route: '/admin/settings',
};

export const WithoutDelete = Template.bind({});
WithoutDelete.args = {
	title: 'Settings',
	route: '/admin/settings',
};
