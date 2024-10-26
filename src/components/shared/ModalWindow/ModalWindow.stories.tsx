import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { ModalWindow } from './ModalWindow';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Shared/ModalWindow',
	component: ModalWindow,
} as Meta<typeof ModalWindow>;

const Template: StoryFn<typeof ModalWindow> = (args) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button type='button' className='button' onClick={() => setOpen(true)}>
				Open big modal
			</button>
			<ModalWindow
				{...args}
				open={open}
				onClose={(value) => setOpen(value)}
				onSave={() => action('save')()}
				onCancel={() => action('cancel')()}
			/>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	title: 'Modal Title',
	// modalType: 'base',
};

export const WithContent = Template.bind({});
WithContent.args = {
	title: 'Modal Title',
	children: (
		<div>
			<p>Some different content in this modal.</p>
		</div>
	),
};

export const WithSubmitButton = Template.bind({});
WithSubmitButton.args = {
	title: 'Modal Title',
	children: (
		<div>
			<p>Some different content in this modal.</p>
		</div>
	),
	onSave: () => {
		console.log('submitted!');
	},
};
