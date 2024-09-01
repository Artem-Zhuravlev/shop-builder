import type { Meta, StoryFn } from '@storybook/react';
import { AdminSettingsTable } from './AdminSettingsTable';

export default {
	title: 'Entities/Admin/Settings/AdminSettingsTable',
	component: AdminSettingsTable,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminSettingsTable>;

const Template: StoryFn<typeof AdminSettingsTable> = (args) => {
	return <AdminSettingsTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			store_name: 'Your Store (Default)',
			store_url: 'https://test.com',
		},
	],
};
