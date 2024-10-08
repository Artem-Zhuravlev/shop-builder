import type { Meta, StoryFn } from '@storybook/react';
import { AdminReviewsForm } from './AdminReviewsForm';

export default {
	title: 'Entities/Admin/Reviews/AdminReviewsForm',
	component: AdminReviewsForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminReviewsForm>;

const Template: StoryFn<typeof AdminReviewsForm> = (args) => {
	return <AdminReviewsForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
