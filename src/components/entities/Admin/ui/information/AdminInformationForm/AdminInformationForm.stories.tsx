import type { Meta, StoryFn } from '@storybook/react';
import { AdminInformationForm } from './AdminInformationForm';

export default {
	title: 'Entities/Admin/Information/AdminInformationForm',
	component: AdminInformationForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminInformationForm>;

const Template: StoryFn<typeof AdminInformationForm> = (args) => {
	return <AdminInformationForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
