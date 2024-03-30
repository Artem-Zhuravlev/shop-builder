import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputTextarea, TextareaProps } from './InputTextarea';
import { Form } from 'react-final-form';

export default {
	title: 'inputs/InputTextarea',
	component: InputTextarea,
} as Meta<typeof InputTextarea>;

const Template: StoryFn<TextareaProps> = ({ ...args }) => {
	const onSubmit = async (values: object) => {
		console.log('Form submitted with values:', values);
	};

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ field: args.value }}>
			{({ handleSubmit, values }) => (
				<>
					{JSON.stringify([values, 1, 0])}
					<form
						onSubmit={handleSubmit}
						style={{
							display: 'flex',
							gap: '20px',
							alignItems: 'flex-end',
							flexWrap: 'wrap',
						}}>
						<InputTextarea {...args} />
					</form>
				</>
			)}
		</Form>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	value: 'Some string',
	placeholder: 'Please add text',
	disabled: false,
	name: 'textarea-name',
	id: 'textarea-1',
};
