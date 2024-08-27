import type { Meta, StoryFn } from '@storybook/react';
import { AdminSettingsForm } from './AdminSettingsForm';

export default {
	title: 'Entities/Admin/Settings/AdminSettingsForm',
	component: AdminSettingsForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminSettingsForm>;

const Template: StoryFn<typeof AdminSettingsForm> = (args) => {
	return <AdminSettingsForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
