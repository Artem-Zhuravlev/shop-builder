import { AutoSave } from '@shared/inputs';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputWeight } from './InputWeight';

export default {
	title: 'Shared/Inputs/InputWeight',
	component: InputWeight,
} as Meta<typeof InputWeight>;

const Template: StoryFn<typeof InputWeight> = (args) => {
	const onSubmit = (values: any) => {
		action('onSubmit')(values);
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<>
					<div>
						<AutoSave debounce={0} save={handleSubmit} />
						<InputWeight {...args} />
					</div>
				</>
			)}
		</Form>
	);
};

export const Default = Template.bind({});
Default.args = {
	name: 'status',
};
