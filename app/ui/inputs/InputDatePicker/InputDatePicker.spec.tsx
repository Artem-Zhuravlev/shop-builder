import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputDatePicker } from './InputDatePicker';

const mockOnChange = jest.fn();

describe('InputDatePicker Component', () => {
  it('renders the date picker with the given placeholder text', () => {
    const placeholder = 'Select Date';
    const { getByPlaceholderText } = render(
      <InputDatePicker
        selected={null}
        onChange={mockOnChange}
        placeholderText={placeholder}
        dateFormat="MM/dd/yyyy"
      />
    );

    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('triggers onChange when date is selected', () => {
    const { container } = render(
      <InputDatePicker
        selected={null}
        onChange={mockOnChange}
        placeholderText="Select Date"
        dateFormat="MM/dd/yyyy"
      />
    );

    const datepicker = container.querySelector('.react-datepicker__input-container input') as HTMLElement;

    fireEvent.change(datepicker, { target: { value: '10/25/2023' } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('renders the date picker with a selected date', () => {
    const date = new Date('2023-10-25');
    const { container } = render(
      <InputDatePicker
        selected={date}
        onChange={mockOnChange}
        placeholderText="Select Date"
        dateFormat="MM/dd/yyyy"
      />
    );

    const datepicker = container.querySelector('.react-datepicker__input-container input') as HTMLInputElement;

    expect(datepicker.value).toBe('10/25/2023');
  });
});
