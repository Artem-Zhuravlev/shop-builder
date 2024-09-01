import { AutoSave } from '@/components/shared/inputs';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputStatus } from './InputStatus';

export default {
	title: 'Shared/Inputs/InputStatus',
	component: InputStatus,
} as Meta<typeof InputStatus>;

const Template: StoryFn<typeof InputStatus> = (args) => {
	const onSubmit = (values: any) => {
		action('onSubmit')(values);
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<>
					<div>
						<AutoSave debounce={0} save={handleSubmit} />
						<InputStatus {...args} />
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
