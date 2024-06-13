import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ImagesManager } from './ImagesManager';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Features/Modals/ImagesManager',
	component: ImagesManager,
} as Meta<typeof ImagesManager>;

const Template: StoryFn<typeof ImagesManager> = (args) => {
	return <ImagesManager {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	title: 'Main image',
};
