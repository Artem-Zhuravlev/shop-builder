import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputCheckbox } from './InputCheckbox';
import { Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';

export default {
	title: 'inputs/InputCheckbox',
	component: InputCheckbox,
} as Meta<typeof InputCheckbox>;

const Template: StoryFn<typeof InputCheckbox> = ({ ...args }) => {
	const onSubmit = async (values: object) => {
		console.log('Form submitted with values:', values);
	};

	const handleChange = (e: any) => {
		action('change')(e.target.checked);
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<>
					<form onSubmit={handleSubmit}>
						<InputCheckbox
							{...args}
							onChange={handleChange}
						/>
					</form>
				</>
			)}
		</Form>
	);
};

export const Default = Template.bind({});
Default.args = {
	label: 'Checkbox label',
	name: 'checkbox',
};

export const WithLink = Template.bind({});
WithLink.args = {
	label: (
		<span>
			some text{' '}
			<a
				href='/'
				className='link'>
				Link
			</a>
		</span>
	),
	id: 'checkbox-1',
	name: 'checkbox',
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
	label: 'Checkbox label',
	name: 'checkbox',
	disabled: true,
};
