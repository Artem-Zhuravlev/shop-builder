import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputTextarea, TextareaProps } from './InputTextarea';
import { Form } from 'react-final-form';

interface TextareaStoriesProps extends TextareaProps {
	field?: string;
}

export default {
	title: 'inputs/InputTextarea',
	component: InputTextarea,
} as Meta<typeof InputTextarea>;

const Template: StoryFn<TextareaStoriesProps> = ({ ...args }) => {
	const onSubmit = async (values: object) => {
		console.log('Form submitted with values:', values);
	};

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ field: args.field }}>
			{({ handleSubmit, values }) => (
				<>
					{JSON.stringify(values, null, 2)}
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
	field: 'Some string',
	placeholder: 'Please add text',
	disabled: false,
	name: 'field',
	id: 'textarea-1',
};
