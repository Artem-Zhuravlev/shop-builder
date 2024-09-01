import { AutoSave } from '@/components/shared/inputs';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputCountry } from './InputCountry';

export default {
	title: 'Shared/Inputs/InputCountry',
	component: InputCountry,
} as Meta<typeof InputCountry>;

const Template: StoryFn<typeof InputCountry> = (args) => {
	const onSubmit = (values: any) => {
		action('onSubmit')(values);
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<>
					<div>
						<AutoSave debounce={0} save={handleSubmit} />
						<InputCountry {...args} />
					</div>
				</>
			)}
		</Form>
	);
};

export const Default = Template.bind({});
Default.args = {
	name: 'select',
};
