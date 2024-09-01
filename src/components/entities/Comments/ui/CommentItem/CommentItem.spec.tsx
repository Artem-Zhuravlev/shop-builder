import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { customRender } from '@/utils/intlWrapper/IntlWrapper';
import { CommentItem } from './CommentItem';

describe('CommentItem component', () => {
	const commentData = {
		author: 'John Doe',
		avatar: '/avatar.jpg',
		comment: 'Test comment',
		id: 1,
		publishedAt: new Date().toISOString(),
		nestedComments: [],
		replyTo: 'Jane Doe',
	};

	test('renders comment information correctly', () => {
		customRender(<CommentItem {...commentData} />);
		expect(screen.getByText(commentData.author)).toBeInTheDocument();
		expect(screen.getByText(commentData.comment)).toBeInTheDocument();
		expect(screen.getByText(`@${commentData.replyTo}`)).toBeInTheDocument();
		expect(
			screen.getByText(new Date(commentData.publishedAt).toLocaleDateString()),
		).toBeInTheDocument();
	});

	test('toggle reply form visibility when "Reply" button is clicked', () => {
		customRender(<CommentItem {...commentData} />);
		fireEvent.click(screen.getByText('Reply'));
		expect(screen.getByTestId('comment-form')).toBeInTheDocument();
		fireEvent.click(screen.getByText('Reply'));
		expect(screen.queryByTestId('comment-form')).not.toBeInTheDocument();
	});
});
