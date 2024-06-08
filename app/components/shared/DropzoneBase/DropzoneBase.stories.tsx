import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DropzoneBase } from './DropzoneBase';

export default {
	title: 'Shared/DropzoneBase',
	component: DropzoneBase,
} as Meta<typeof DropzoneBase>;

const Template: StoryFn<typeof DropzoneBase> = (args) => (
	<DropzoneBase
		{...args}
		onDropAccepted={action('onDropAccepted')}
	/>
);

export const Default = Template.bind({});
Default.args = {
	textMaxSize: 'Maximum size of downloaded files: 2 MB.',
	textDragActive: 'Drop the files here...',
	textDrag: "Drag 'n' drop some files here, or click to select files",
};
