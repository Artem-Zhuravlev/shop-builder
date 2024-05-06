import React from 'react';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import '@testing-library/jest-dom';
import { CommentsList, Comment } from './CommentsList';

jest.mock('../CommentItem/CommentItem', () => ({
	CommentItem: jest.fn(() => null),
}));

describe('CommentsList component', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	const mockComments: Comment[] = [
		{
			id: 1,
			author: 'John',
			comment: 'First comment',
			published_at: '2024-05-06',
		},
		{
			id: 2,
			author: 'Alice',
			comment: 'Reply to first comment',
			published_at: '2024-05-06',
			replied_to: 1,
		},
		// Add more mock comments as needed
	];

	it('renders correctly without comments', () => {
		customRender(<CommentsList comments={[]} />);
		expect(document.querySelectorAll('.CommentItem')).toHaveLength(0);
	});

	it('passes correct props to CommentItem', () => {
		customRender(<CommentsList comments={mockComments} />);
		expect(
			require('../CommentItem/CommentItem').CommentItem
		).toHaveBeenCalledWith(
			expect.objectContaining({
				author: 'John',
				id: 1,
				comment: 'First comment',
				publishedAt: '2024-05-06',
				avatar: undefined,
				nestedComments: [
					{
						author: 'Alice',
						comment: 'Reply to first comment',
						id: 2,
						published_at: '2024-05-06',
						replied_to: 1,
					},
				],
			}),
			{}
		);
	});
});
