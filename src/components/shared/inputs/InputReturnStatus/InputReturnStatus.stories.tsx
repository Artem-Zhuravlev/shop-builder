import { AutoSave } from '@/components/shared/inputs';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputReturnStatus } from './InputReturnStatus';

export default {
	title: 'Shared/Inputs/InputReturnStatus',
	component: InputReturnStatus,
} as Meta<typeof InputReturnStatus>;

const Template: StoryFn<typeof InputReturnStatus> = (args) => {
	const onSubmit = (values: any) => {
		action('onSubmit')(values);
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<>
					<div>
						<AutoSave debounce={0} save={handleSubmit} />
						<InputReturnStatus {...args} />
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
