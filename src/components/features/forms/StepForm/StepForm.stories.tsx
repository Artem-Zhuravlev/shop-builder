import type { Meta, StoryFn } from '@storybook/react';
import { StepForm } from './StepForm';
import { InputText } from '@/components/shared/inputs';

export default {
	title: 'Features/Forms/StepForm',
	component: StepForm,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof StepForm>;

const Template: StoryFn<typeof StepForm> = (args) => {
	return <StepForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	tabs: [
		{
			label: 'Tab 1',
			description: (
				<>
					<InputText name='input_1' placeholder='Input 1' required />
				</>
			),
		},
		{
			label: 'Tab 1',
			description: (
				<>
					<InputText name='input_2' placeholder='Input 2' required />
				</>
			),
		},
	],
};
