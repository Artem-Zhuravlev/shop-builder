import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputRadio } from './InputRadio';
import { Form } from 'react-final-form';

export default {
	title: 'inputs/InputRadio',
	component: InputRadio,
} as Meta<typeof InputRadio>;

const Template: StoryFn<typeof InputRadio> = (args) => {
	const onSubmit = async (values: object) => {
		console.log('Form submitted with values:', values);
	};

	const items = ['Label 1', 'Label 2', 'Label 3'];

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<>
					<div
						style={{
							display: 'flex',
							gap: '20px',
							alignItems: 'flex-end',
							flexWrap: 'wrap',
						}}>
						{items.map((item, index) => (
							<InputRadio
								value={item}
								name={args.name}
								key={index}
								suffix={args.suffix}
							/>
						))}
					</div>
				</>
			)}
		</Form>
	);
};

export const Default = Template.bind({});
Default.args = {
	name: 'radio',
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
	name: 'radio',
	suffix: 10,
};
