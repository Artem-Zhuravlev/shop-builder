import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CommentsList } from './CommentsList';

export default {
	title: 'Entities/Comments/CommentsList',
	component: CommentsList,
} as Meta<typeof CommentsList>;

const Template: StoryFn<typeof CommentsList> = (args) => {
	return <CommentsList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	comments: [
		{
			id: 1,
			author: 'John Doe',
			comment: 'Lorem ipsum dolor sit amet',
			avatar: 'https://i.pravatar.cc/300',
			published_at: '2023-07-20',
		},
		{
			id: 2,
			author: 'Jane Doe',
			comment: 'Lorem ipsum dolor sit amet',
			published_at: '2023-07-20',
		},
		{
			id: 3,
			author: 'Nick Picknick',
			comment: 'Lorem ipsum dolor sit amet',
			avatar: 'https://i.pravatar.cc/300',
			published_at: '2023-07-20',
			replied_to: 2,
		},
		{
			id: 4,
			author: 'Steve Jobs',
			comment: 'Lorem ipsum dolor sit amet',
			published_at: '2023-07-20',
			replied_to: 2,
			related_to: 3,
		},
		{
			id: 5,
			author: 'Alice Smith',
			comment: 'Lorem ipsum dolor sit amet',
			published_at: '2023-07-21',
		},
		{
			id: 6,
			author: 'Bob Johnson',
			comment: 'Lorem ipsum dolor sit amet',
			published_at: '2023-07-21',
			avatar: 'https://i.pravatar.cc/300',
			replied_to: 5,
		},
		{
			id: 7,
			author: 'Eve Williams',
			comment: 'Lorem ipsum dolor sit amet',
			published_at: '2023-07-22',
		},
		{
			id: 8,
			author: 'Charlie Brown',
			comment: 'Lorem ipsum dolor sit amet',
			published_at: '2023-07-22',
			avatar: 'https://i.pravatar.cc/300',
			replied_to: 7,
		},
	],
};
