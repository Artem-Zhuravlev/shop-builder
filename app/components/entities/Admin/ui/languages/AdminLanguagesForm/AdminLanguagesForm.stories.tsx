import type { Meta, StoryFn } from '@storybook/react';
import { AdminLanguagesForm } from './AdminLanguagesForm';

export default {
	title: 'Entities/Admin/Languages/AdminLanguagesForm',
	component: AdminLanguagesForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminLanguagesForm>;

const Template: StoryFn<typeof AdminLanguagesForm> = (args) => {
	return <AdminLanguagesForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
