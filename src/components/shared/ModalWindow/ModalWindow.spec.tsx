// ModalWindow.test.tsx
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { ModalWindow } from './ModalWindow';
import { customRender } from '@/utils/intlWrapper/IntlWrapper';
import { Not } from 'typeorm';

describe('ModalWindow', () => {
	const mockOnClose = jest.fn();
	const mockOnSubmit = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks(); // Clear previous mocks before each test
	});

	test('renders without crashing', () => {
		customRender(
			<ModalWindow open={true} onClose={mockOnClose}>
				<p>Test Content</p>
			</ModalWindow>,
		);

		expect(screen.getByText('Test Content')).toBeInTheDocument();
	});

	test('displays title when provided', () => {
		customRender(
			<ModalWindow open={true} onClose={mockOnClose} title='Test Title'>
				<p>Test Content</p>
			</ModalWindow>,
		);

		expect(screen.getByText('Test Title')).toBeInTheDocument();
	});

	test('does not display title when not provided', () => {
		customRender(
			<ModalWindow open={true} onClose={mockOnClose}>
				<p>Test Content</p>
			</ModalWindow>,
		);

		expect(screen.queryByText('Test Title')).toBeNull();
	});

	test('calls onClose when close button is clicked', () => {
		customRender(
			<ModalWindow open={true} onClose={mockOnClose}>
				<p>Test Content</p>
			</ModalWindow>,
		);

		fireEvent.click(screen.getByRole('button', { name: /cancel/i }));

		expect(mockOnClose).toHaveBeenCalledWith(false);
	});

	test('calls onSubmit when submit button is clicked', () => {
		customRender(
			<ModalWindow open={true} onClose={mockOnClose} onSubmit={mockOnSubmit}>
				<p>Test Content</p>
			</ModalWindow>,
		);

		fireEvent.click(screen.getByRole('button', { name: /save/i }));

		expect(mockOnSubmit).toHaveBeenCalled();
	});
});
