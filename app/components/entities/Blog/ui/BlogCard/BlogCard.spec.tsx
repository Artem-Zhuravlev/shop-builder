import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BlogCard } from './BlogCard';

describe('BlogCard Component', () => {
	const mockData = {
		to: '/blog/post-1',
		image: 'image.jpg',
		author: 'John Doe',
		comments: 5,
		viewed: 100,
		title: 'Sample Blog Post',
		published_at: '2023-07-20',
	};

	it('renders blog card with correct data', () => {
		const { to, image, author, comments, viewed, title, published_at } =
			mockData;

		const { getByText, getByAltText } = render(<BlogCard {...mockData} />);

		const blogTitle = getByText(title);
		const blogAuthor = getByText(author);
		const blogComments = getByText(comments.toString());
		const blogViewed = getByText(viewed.toString());
		const blogImage = getByAltText(title);
		const blogPublishedDate = getByText(/2023/);

		expect(blogTitle).toBeInTheDocument();
		expect(blogAuthor).toBeInTheDocument();
		expect(blogComments).toBeInTheDocument();
		expect(blogViewed).toBeInTheDocument();
		expect(blogImage).toBeInTheDocument();
		expect(blogPublishedDate).toBeInTheDocument();
	});

	it('displays the published date in the correct format', () => {
		const { getByText } = render(<BlogCard {...mockData} />);

		const blogPublishedDate = getByText(/2023/);

		expect(blogPublishedDate).toBeInTheDocument();
	});
});
