import { AutoSave } from '@shared/inputs';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputCurrency } from './InputCurrency';

export default {
	title: 'Shared/Inputs/InputCurrency',
	component: InputCurrency,
} as Meta<typeof InputCurrency>;

const Template: StoryFn<typeof InputCurrency> = (args) => {
	const onSubmit = (values: any) => {
		action('onSubmit')(values);
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<>
					<div>
						<AutoSave debounce={0} save={handleSubmit} />
						<InputCurrency {...args} />
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
