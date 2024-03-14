import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputText, InputProps } from './InputText';
import { ButtonBase } from '@/shared/ButtonBase';

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
					{args.withForm && JSON.stringify(values)}

					<form
						onSubmit={handleSubmit}
						style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
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
	withForm: true,
	placeholder: 'Please add text',
	label: 'Field',
	isRequired: true,
};

export const PrimaryDisabled: StoryFn<InputProps> = Template.bind({});
PrimaryDisabled.args = {
	value: 'Some string',
	withForm: true,
	disabled: true,
	placeholder: 'Please add text',
	label: 'Field',
};

export const EmptyField: StoryFn<InputProps> = Template.bind({});
EmptyField.args = {
	value: '',
	withForm: true,
	placeholder: 'Please add text',
	label: 'Field',
	isRequired: true,
};

export const Rounded: StoryFn<InputProps> = Template.bind({});
Rounded.args = {
	value: '',
	withForm: true,
	placeholder: 'Please add text',
	label: 'Field',
	isRequired: true,
	rounded: true,
};

export const WithRoundedLeftSide: StoryFn<InputProps> = Template.bind({});
WithRoundedLeftSide.args = {
	value: '',
	withForm: true,
	placeholder: 'Please add text',
	label: 'Field',
	isRequired: true,
	roundedLeftSide: true,
};

export const WithRoundedRightSide: StoryFn<InputProps> = Template.bind({});
WithRoundedRightSide.args = {
	value: '',
	withForm: true,
	placeholder: 'Please add text',
	label: 'Field',
	isRequired: true,
	roundedRightSide: true,
};

export const WithoutFormWrapper: StoryFn<InputProps> = Template.bind({});
WithoutFormWrapper.args = {
	value: 'without form wrapper',
	withForm: false,
	placeholder: 'Please add text',
	label: 'Field',
};

export const WithCustomValidation: StoryFn<InputProps> = Template.bind({});
WithCustomValidation.args = {
	value: 'without form wrapper',
	withForm: true,
	placeholder: 'Please add text',
	label: 'Field',
	isRequired: true,
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
