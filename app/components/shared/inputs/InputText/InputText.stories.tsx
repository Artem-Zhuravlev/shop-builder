import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputText, InputProps } from './InputText';
import { ButtonBase } from '@shared/ButtonBase';

interface InputStoryProps extends InputProps {
	field?: string;
}

export default {
	title: 'inputs/InputText',
	component: InputText,
	decorators: [(Story) => <Story />],
} as Meta<typeof InputText>;

const Template: StoryFn<InputStoryProps> = ({ ...args }) => {
	const onSubmit = async (values: object) => {
		console.log('Form submitted with values:', values);
	};

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ field: args.field }}>
			{({ handleSubmit, values }) => (
				<>
					{JSON.stringify(values)}

					<form
						onSubmit={handleSubmit}
						style={{
							display: 'flex',
							gap: '20px',
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

export const Primary = Template.bind({});
Primary.args = {
	field: 'Some string',
	placeholder: 'Please add text',
	label: 'Field',
	required: true,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
	field: 'Some string',
	disabled: true,
	placeholder: 'Please add text',
	label: 'Field',
};

export const EmptyField = Template.bind({});
EmptyField.args = {
	field: '',
	placeholder: 'Please add text',
	label: 'Field',
	required: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
	field: '',
	placeholder: 'Please add text',
	label: 'Field',
	required: true,
	rounded: true,
};

export const WithRoundedLeftSide = Template.bind({});
WithRoundedLeftSide.args = {
	field: '',
	placeholder: 'Please add text',
	label: 'Field',
	required: true,
	roundedLeftSide: true,
};

export const WithRoundedRightSide = Template.bind({});
WithRoundedRightSide.args = {
	field: '',
	placeholder: 'Please add text',
	label: 'Field',
	required: true,
	roundedRightSide: true,
};

export const WithCustomValidation = Template.bind({});
WithCustomValidation.args = {
	field: 'without form wrapper',
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
