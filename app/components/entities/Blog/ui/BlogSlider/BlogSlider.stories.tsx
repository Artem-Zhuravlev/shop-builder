import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { BlogSlider } from './BlogSlider';

export default {
	title: 'Entities/Blog/BlogSlider',
	component: BlogSlider,
} as Meta<typeof BlogSlider>;

const Template: StoryFn<typeof BlogSlider> = (args) => {
	return <BlogSlider {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	title: 'Blog Posts',
	items: [
		{
			to: '/blog',
			image:
				'https://www.nps.gov/common/uploads/grid_builder/nature/crop16_9/8697FC59-BB6B-D535-D059DB406DE0A4D3.jpg?width=640&quality=90&mode=crop',
			author: 'John Doe',
			comments: 50,
			viewed: 50,
			title:
				'This revision focuses on checking the presence of specific elements or text within',
			publishedAt: '2023-07-20',
		},
		{
			to: '/blog',
			image:
				'https://www.nps.gov/common/uploads/grid_builder/nature/crop16_9/8697FC59-BB6B-D535-D059DB406DE0A4D3.jpg?width=640&quality=90&mode=crop',
			author: 'John Doe',
			comments: 50,
			viewed: 50,
			title:
				'This revision focuses on checking the presence of specific elements or text within',
			publishedAt: '2023-07-20',
		},
		{
			to: '/blog',
			image:
				'https://www.nps.gov/common/uploads/grid_builder/nature/crop16_9/8697FC59-BB6B-D535-D059DB406DE0A4D3.jpg?width=640&quality=90&mode=crop',
			author: 'John Doe',
			comments: 50,
			viewed: 50,
			title:
				'This revision focuses on checking the presence of specific elements or text within',
			publishedAt: '2023-07-20',
		},
		{
			to: '/blog',
			image:
				'https://www.nps.gov/common/uploads/grid_builder/nature/crop16_9/8697FC59-BB6B-D535-D059DB406DE0A4D3.jpg?width=640&quality=90&mode=crop',
			author: 'John Doe',
			comments: 50,
			viewed: 50,
			title:
				'This revision focuses on checking the presence of specific elements or text within',
			publishedAt: '2023-07-20',
		},
		{
			to: '/blog',
			image:
				'https://www.nps.gov/common/uploads/grid_builder/nature/crop16_9/8697FC59-BB6B-D535-D059DB406DE0A4D3.jpg?width=640&quality=90&mode=crop',
			author: 'John Doe',
			comments: 50,
			viewed: 50,
			title:
				'This revision focuses on checking the presence of specific elements or text within',
			publishedAt: '2023-07-20',
		},
		{
			to: '/blog',
			image:
				'https://www.nps.gov/common/uploads/grid_builder/nature/crop16_9/8697FC59-BB6B-D535-D059DB406DE0A4D3.jpg?width=640&quality=90&mode=crop',
			author: 'John Doe',
			comments: 50,
			viewed: 50,
			title:
				'This revision focuses on checking the presence of specific elements or text within',
			publishedAt: '2023-07-20',
		},
	],
};
