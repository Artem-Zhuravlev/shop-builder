import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputCheckbox } from './InputCheckbox';
import { Form } from 'react-final-form';

export default {
	title: 'inputs/InputCheckbox',
	component: InputCheckbox,
	parameters: {
		actions: {
			handles: ['onChange'],
		},
	},
} as Meta<typeof InputCheckbox>;

const Template: StoryFn<typeof InputCheckbox> = ({ ...args }) => {
	const onSubmit = async (values: object) => {
		console.log('Form submitted with values:', values);
	};

	return (
		<Form onSubmit={onSubmit}>
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
						<InputCheckbox {...args} />
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
