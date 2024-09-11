import type { Meta, StoryFn } from '@storybook/react';
import { SuccessAlert } from './SuccessAlert';

export default {
	title: 'Features/Alerts/SuccessAlert',
	component: SuccessAlert,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof SuccessAlert>;

const Template: StoryFn<typeof SuccessAlert> = (args) => {
	return <SuccessAlert {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	submitSucceeded: true,
};
