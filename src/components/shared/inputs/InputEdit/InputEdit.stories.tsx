import { ButtonBase } from '@/components/shared/ButtonBase';
import type { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputEdit } from './InputEdit';

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
						}}
					>
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
	placeholder: 'Please add text',
	required: true,
};
