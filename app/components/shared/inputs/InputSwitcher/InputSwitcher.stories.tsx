import React from 'react';
import { Form } from 'react-final-form';
import { AutoSave } from '@shared/inputs';
import { StoryFn, Meta } from '@storybook/react';
import { InputSwitcher } from './InputSwitcher';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Shared/Inputs/InputSwitcher',
	component: InputSwitcher,
} as Meta<typeof InputSwitcher>;

const Template: StoryFn<typeof InputSwitcher> = (args) => {
	const handleSubmit = (value: any) => {
		action('onSubmit')(value);
	};

	return (
		<div style={{ width: '300px' }}>
			<Form onSubmit={handleSubmit}>
				{({ handleSubmit }) => (
					<div>
						<AutoSave
							save={handleSubmit}
							debounce={0}
						/>
						<InputSwitcher {...args} />
					</div>
				)}
			</Form>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	name: 'switcher',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
	name: 'switcher',
	label: 'Switcher',
};
