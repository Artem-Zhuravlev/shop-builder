import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputPassword } from './InputPassword';
import { ButtonBase } from '@/shared/ButtonBase';

export default {
	title: 'inputs/InputPassword',
	component: InputPassword,
} as Meta<typeof InputPassword>;

const Template: StoryFn<typeof InputPassword> = (args) => {
	return (
		<Form
			onSubmit={async (values) => {
				console.log('Form submitted with values:', values);
			}}
			initialValues={{ field: 'Some value' }}
			render={({ handleSubmit, values }) => (
				<>
					{args?.withForm && JSON.stringify(values)}

					<form
						onSubmit={handleSubmit}
						style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
						<InputPassword {...args} />
						<ButtonBase type='submit'>Submit</ButtonBase>
					</form>
				</>
			)}
		/>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	value: 'Some string',
	withForm: true,
	placeholder: 'Please add text',
	label: 'Field',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
	value: 'Some string',
	withForm: true,
	disabled: true,
	placeholder: 'Please add text',
	label: 'Field',
};

export const EmptyField = Template.bind({});
EmptyField.args = {
	value: '',
	withForm: true,
	placeholder: 'Please add text',
	label: 'Field',
};

export const WithoutFormWrapper = Template.bind({});
WithoutFormWrapper.args = {
	value: 'without form wrapper',
	withForm: false,
	placeholder: 'Please add text',
	label: 'Field',
};
