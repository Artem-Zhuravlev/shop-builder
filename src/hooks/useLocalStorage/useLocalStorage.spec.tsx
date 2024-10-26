import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import useLocalStorage from './index';

const TestComponent = () => {
	const [value, setValue, removeItem] = useLocalStorage(
		'test-key',
		'initial-value',
	);

	return (
		<div>
			<p>Value: {value}</p>
			<button type='button' onClick={() => setValue('new-value')}>
				Set New Value
			</button>
			<button type='button' onClick={removeItem}>
				Remove Item
			</button>
		</div>
	);
};

describe('useLocalStorage', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	afterEach(() => {
		localStorage.clear();
	});

	it('should initialize with the initial value', () => {
		const { getByText } = render(<TestComponent />);
		expect(getByText('Value: initial-value')).toBeInTheDocument();
	});

	it('should update the value when setValue is called', () => {
		const { getByText, getByRole } = render(<TestComponent />);
		const button = getByRole('button', { name: 'Set New Value' });
		fireEvent.click(button);
		expect(getByText('Value: new-value')).toBeInTheDocument();
	});

	it('should update localStorage when setValue is called', () => {
		const { getByRole } = render(<TestComponent />);
		const button = getByRole('button', { name: 'Set New Value' });
		fireEvent.click(button);
		expect(localStorage.getItem('test-key')).toBe(JSON.stringify('new-value'));
	});

	it('should remove the item from localStorage when removeItem is called', () => {
		const { getByRole } = render(<TestComponent />);
		const removeButton = getByRole('button', { name: 'Remove Item' });
		fireEvent.click(removeButton);
		expect(localStorage.getItem('test-key')).toBeNull();
	});

	it('should reset the value to the initial value when removeItem is called', () => {
		const { getByText, getByRole } = render(<TestComponent />);
		const setValueButton = getByRole('button', { name: 'Set New Value' });
		fireEvent.click(setValueButton);
		const removeButton = getByRole('button', { name: 'Remove Item' });
		fireEvent.click(removeButton);
		expect(getByText('Value: initial-value')).toBeInTheDocument();
	});

	it('should handle JSON parsing correctly', () => {
		const TestComponentWithObject = () => {
			const [value, setValue] = useLocalStorage('test-key', { foo: 'bar' });

			return (
				<div>
					<p>Value: {JSON.stringify(value)}</p>
					<button type='button' onClick={() => setValue({ foo: 'baz' })}>
						Set New Value
					</button>
				</div>
			);
		};

		const { getByText, getByRole } = render(<TestComponentWithObject />);
		const button = getByRole('button', { name: 'Set New Value' });
		fireEvent.click(button);
		expect(getByText('Value: {"foo":"baz"}')).toBeInTheDocument();
	});
});
