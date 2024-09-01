import type { Meta, StoryFn } from '@storybook/react';
import { ErrorAlert } from './ErrorAlert';

export default {
	title: 'Features/Alerts/ErrorAlert',
	component: ErrorAlert,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof ErrorAlert>;

const Template: StoryFn<typeof ErrorAlert> = (args) => {
	return <ErrorAlert {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	submitFailed: true,
};
