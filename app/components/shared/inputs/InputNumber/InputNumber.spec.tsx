import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import '@testing-library/jest-dom';
import { InputNumber } from './InputNumber';

describe('InputNumber Component', () => {
	it('increments the value when the increment button is clicked', async () => {
		const mockOnNumberChange = jest.fn();
		const { getByText } = customRender(
			<InputNumber
				value={0}
				onNumberChange={mockOnNumberChange}
			/>
		);

		const incrementButton = getByText('+');
		fireEvent.click(incrementButton);

		await waitFor(() => {
			expect(mockOnNumberChange).toHaveBeenCalledWith(1);
		});
	});

	it('decrements the value when the decrement button is clicked', async () => {
		const mockOnNumberChange = jest.fn();
		const { getByText } = customRender(
			<InputNumber
				value={2}
				onNumberChange={mockOnNumberChange}
			/>
		);

		const decrementButton = getByText('-');
		fireEvent.click(decrementButton);

		await waitFor(() => {
			expect(mockOnNumberChange).toHaveBeenCalledWith(1);
		});
	});

	it('updates the value when input is changed', () => {
		const mockOnNumberChange = jest.fn();
		const { getByRole } = customRender(
			<InputNumber
				value={0}
				onNumberChange={mockOnNumberChange}
			/>
		);

		const input = getByRole('spinbutton');
		fireEvent.change(input, { target: { value: '5' } });

		expect(mockOnNumberChange).toHaveBeenCalledWith(5);
	});

	it('does not decrement the value if it is already 0', () => {
		const mockOnNumberChange = jest.fn();
		const { getByText } = customRender(
			<InputNumber
				value={0}
				onNumberChange={mockOnNumberChange}
			/>
		);

		const decrementButton = getByText('-');
		fireEvent.click(decrementButton);

		expect(mockOnNumberChange).not.toHaveBeenCalled();
	});

	it('calls onNumberChange with the incremented value', async () => {
		const mockOnNumberChange = jest.fn();
		const { getByText } = customRender(
			<InputNumber
				value={5}
				onNumberChange={mockOnNumberChange}
			/>
		);

		const incrementButton = getByText('+');
		fireEvent.click(incrementButton);

		await waitFor(() => {
			expect(mockOnNumberChange).toHaveBeenCalledWith(6);
		});
	});
});
