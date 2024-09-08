import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { customRender } from '@/utils/intlWrapper/IntlWrapper';
import '@testing-library/jest-dom';
import { AdminTableNavbar } from './AdminTableNavbar';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(),
}));
describe('AdminTableNavbar', () => {
	const mockPush = jest.fn();
	const mockOnDelete = jest.fn();
	const t = jest.fn((key) => key); // Mocks translation strings

	beforeEach(() => {
		(useRouter as jest.Mock).mockReturnValue({
			push: mockPush,
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('renders title and add new button', () => {
		customRender(
			<AdminTableNavbar
				title='Test Title'
				route='/test'
				onDelete={mockOnDelete}
			/>,
		);

		expect(screen.getByText('Test Title')).toBeInTheDocument();

		expect(screen.getByText('Add new')).toBeInTheDocument();
	});

	it('calls router push on clicking add new button', () => {
		customRender(
			<AdminTableNavbar
				title='Test Title'
				route='/test'
				onDelete={mockOnDelete}
			/>,
		);

		const addButton = screen.getByText('Add new');
		fireEvent.click(addButton);

		expect(mockPush).toHaveBeenCalledWith('/test/new');
	});

	it('does not render delete button when id is undefined', () => {
		const { queryByTestId } = customRender(
			<AdminTableNavbar
				title='Test Title'
				route='/test'
				onDelete={mockOnDelete}
			/>,
		);

		const button = queryByTestId('delete');

		expect(button).toBeNull();
	});
});
