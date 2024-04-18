import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputRadio, InputRadioProps } from './InputRadio';
import { Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';

interface InputRadioStoryProps extends InputRadioProps {
	radio?: string;
}

export default {
	title: 'inputs/InputRadio',
	component: InputRadio,
} as Meta<typeof InputRadio>;

const Template: StoryFn<InputRadioStoryProps> = (args) => {
	const onSubmit = async (values: object) => {
		console.log('Form submitted with values:', values);
	};

	const items = ['Label 1', 'Label 2', 'Label 3'];

	const handleChange = (e: any) => {
		action('change')(e.target.value);
	};

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ radio: args?.radio }}>
			{() => (
				<>
					<div className='d-flex gap-1'>
						{items.map((item, index) => (
							<InputRadio
								value={item}
								name={args.name}
								key={index}
								suffix={args.suffix}
								onChange={handleChange}
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

export const WithSelectedValueSuffix = Template.bind({});
WithSelectedValueSuffix.args = {
	name: 'radio',
	radio: 'Label 2',
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
	name: 'radio',
	suffix: 10,
};
