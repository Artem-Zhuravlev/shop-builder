import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputCheckbox } from './InputCheckbox';

describe('InputCheckbox Component', () => {
  const mockOnChange = jest.fn();

  it('renders the checkbox input with the given label', () => {
    const label = 'Check me';
    const id = 'checkbox-id';
    const { getByText, getByLabelText } = render(
      <InputCheckbox id={id} label={label} value={false} onChange={mockOnChange} />
    );

    expect(getByText(label)).toBeInTheDocument();
    expect(getByLabelText(label)).toBeInTheDocument();
  });

  it('triggers onChange when checkbox is clicked', () => {
    const label = 'Check me';
    const id = 'checkbox-id';
    const { getByLabelText } = render(
      <InputCheckbox id={id} label={label} value={false} onChange={mockOnChange} />
    );

    const checkbox = getByLabelText(label) as HTMLInputElement;

    fireEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('renders the checkbox as checked when value is true', () => {
    const label = 'Check me';
    const id = 'checkbox-id';
    const { getByLabelText } = render(
      <InputCheckbox id={id} label={label} value={true} onChange={mockOnChange} />
    );

    const checkbox = getByLabelText(label) as HTMLInputElement;

    expect(checkbox).toBeChecked();
  });
});
