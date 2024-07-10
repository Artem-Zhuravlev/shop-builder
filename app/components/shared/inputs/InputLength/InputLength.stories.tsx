import { AutoSave } from '@shared/inputs';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputLength } from './InputLength';

export default {
	title: 'Shared/Inputs/InputLength',
	component: InputLength,
} as Meta<typeof InputLength>;

const Template: StoryFn<typeof InputLength> = (args) => {
	const onSubmit = (values: any) => {
		action('onSubmit')(values);
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<>
					<div>
						<AutoSave debounce={0} save={handleSubmit} />
						<InputLength {...args} />
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
