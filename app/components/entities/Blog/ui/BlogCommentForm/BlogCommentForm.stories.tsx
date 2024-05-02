import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { BlogCommentForm } from './BlogCommentForm';

export default {
	title: 'Entities/Blog/BlogCommentForm',
	component: BlogCommentForm,
} as Meta<typeof BlogCommentForm>;

const Template: StoryFn<typeof BlogCommentForm> = (args) => {
	return (
		<div style={{ maxWidth: '532px' }}>
			<BlogCommentForm {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {};
