import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ModalWindow } from './ModalWindow';

export default {
	title: 'Shared/ModalWindow',
	component: ModalWindow,
} as Meta<typeof ModalWindow>;

const Template: StoryFn<typeof ModalWindow> = (args) => (
	<ModalWindow {...args} />
);

export const Default = Template.bind({});
Default.args = {
	title: 'Modal Title',
	visibility: true,
};

export const WithContent = Template.bind({});
WithContent.args = {
	title: 'Modal Title',
	visibility: true,
	children: (
		<div>
			<p>Some different content in this modal.</p>
		</div>
	),
};

export const WithSubmitButton = Template.bind({});
WithSubmitButton.args = {
	title: 'Modal Title',
	visibility: true,
	children: (
		<div>
			<p>Some different content in this modal.</p>
		</div>
	),
	onSubmit: () => {
		console.log('submitted!');
	},
};
