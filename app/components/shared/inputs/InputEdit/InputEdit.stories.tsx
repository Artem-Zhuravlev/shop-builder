import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputEdit } from './InputEdit';
import { EditorState } from 'draft-js';
import { Form } from 'react-final-form';
import { ButtonBase } from '@shared/ButtonBase';

export default {
	title: 'Shared/Inputs/InputEdit',
	component: InputEdit,
} as Meta<typeof InputEdit>;

const Template: StoryFn<typeof InputEdit> = (args) => {
	const onSubmit = async (values: object) => {
		console.log('Form submitted with values:', values);
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit, values }) => (
				<>
					<pre>{JSON.stringify(values)}</pre>

					<form
						onSubmit={handleSubmit}
						style={{
							display: 'flex',
							gap: '20px',
							flexWrap: 'wrap',
						}}>
						<InputEdit {...args} />
						<ButtonBase type='submit'>Submit</ButtonBase>
					</form>
				</>
			)}
		</Form>
	);
};

export const Default = Template.bind({});
Default.args = {
	name: 'field',
};
