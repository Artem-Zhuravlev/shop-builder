import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputText, InputProps } from './InputText';
import { ButtonBase } from '@shared/ButtonBase';

export default {
	title: 'inputs/InputText',
	component: InputText,
	decorators: [(Story) => <Story />],
} as Meta<typeof InputText>;

const Template: StoryFn<InputProps> = ({ ...args }) => {
	const onSubmit = async (values: object) => {
		console.log('Form submitted with values:', values);
	};

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ field: args.value }}>
			{({ handleSubmit, values }) => (
				<>
					{JSON.stringify(values)}

					<form
						onSubmit={handleSubmit}
						style={{
							display: 'flex',
							gap: '20px',
							alignItems: 'flex-end',
							flexWrap: 'wrap',
						}}>
						<InputText {...args} />
						<ButtonBase type='submit'>Submit</ButtonBase>
					</form>
				</>
			)}
		</Form>
	);
};

export const Primary: StoryFn<InputProps> = Template.bind({});
Primary.args = {
	value: 'Some string',
	placeholder: 'Please add text',
	label: 'Field',
	required: true,
};

export const PrimaryDisabled: StoryFn<InputProps> = Template.bind({});
PrimaryDisabled.args = {
	value: 'Some string',
	disabled: true,
	placeholder: 'Please add text',
	label: 'Field',
};

export const EmptyField: StoryFn<InputProps> = Template.bind({});
EmptyField.args = {
	value: '',
	placeholder: 'Please add text',
	label: 'Field',
	required: true,
};

export const Rounded: StoryFn<InputProps> = Template.bind({});
Rounded.args = {
	value: '',
	placeholder: 'Please add text',
	label: 'Field',
	required: true,
	rounded: true,
};

export const WithRoundedLeftSide: StoryFn<InputProps> = Template.bind({});
WithRoundedLeftSide.args = {
	value: '',
	placeholder: 'Please add text',
	label: 'Field',
	required: true,
	roundedLeftSide: true,
};

export const WithRoundedRightSide: StoryFn<InputProps> = Template.bind({});
WithRoundedRightSide.args = {
	value: '',
	placeholder: 'Please add text',
	label: 'Field',
	required: true,
	roundedRightSide: true,
};

export const WithoutFormWrapper: StoryFn<InputProps> = Template.bind({});
WithoutFormWrapper.args = {
	value: 'without form wrapper',
	placeholder: 'Please add text',
	label: 'Field',
};

export const WithCustomValidation: StoryFn<InputProps> = Template.bind({});
WithCustomValidation.args = {
	value: 'without form wrapper',
	placeholder: 'Please add text',
	label: 'Field',
	required: true,
	validationHandler(value) {
		if (!value) {
			return 'Email is required';
		}

		const emailRegex = /^\S+@\S+\.\S+$/;
		if (!emailRegex.test(value)) {
			return 'Email is not valid';
		}
	},
};
