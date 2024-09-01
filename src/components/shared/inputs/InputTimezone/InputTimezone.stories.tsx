import { AutoSave } from '@/components/shared/inputs';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputTimezone } from './InputTimezone';

export default {
	title: 'Shared/Inputs/InputTimezone',
	component: InputTimezone,
} as Meta<typeof InputTimezone>;

const Template: StoryFn<typeof InputTimezone> = (args) => {
	const onSubmit = (values: any) => {
		action('onSubmit')(values);
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<>
					<div>
						<AutoSave debounce={0} save={handleSubmit} />
						<InputTimezone {...args} />
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
