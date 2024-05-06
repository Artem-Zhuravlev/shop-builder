import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CommentItem } from './CommentItem';

export default {
	title: 'Entities/Comments/CommentItem',
	component: CommentItem,
} as Meta<typeof CommentItem>;

const Template: StoryFn<typeof CommentItem> = (args) => {
	return <CommentItem {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	author: 'John Doe',
	comment:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque massa placerat duis. Ipsum consequat nisl vel pretium lectus quam id. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Consequat mauris nunc congue nisi vitae suscipit tellus. Viverra vitae congue eu consequat ac felis donec et. Fermentum odio eu feugiat pretium. Vitae congue eu consequat ac felis. Cursus eget nunc scelerisque viverra mauris in.',
	publishedAt: '2023-07-20',
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
	avatar: 'https://i.pravatar.cc/300',
	author: 'John Doe',
	comment:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque massa placerat duis. Ipsum consequat nisl vel pretium lectus quam id. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Consequat mauris nunc congue nisi vitae suscipit tellus. Viverra vitae congue eu consequat ac felis donec et. Fermentum odio eu feugiat pretium. Vitae congue eu consequat ac felis. Cursus eget nunc scelerisque viverra mauris in.',
	publishedAt: '2023-07-20',
};
