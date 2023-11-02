import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputRadio } from './InputRadio';

describe('InputRadio component', () => {
  it('renders radio options', () => {
    const items = ['Option 1', 'Option 2', 'Option 3'];
    const onChange = jest.fn();
    const value = 'Option 2';

    const { getByText, getByLabelText } = render(
      <InputRadio name="test" items={items} value={value} onChange={onChange} />
    );

    items.forEach((label) => {
      const radioElement = getByLabelText(label) as HTMLInputElement;
      expect(radioElement).toBeInTheDocument();
      expect(radioElement.type).toBe('radio');
      expect(radioElement.value).toBe(label);
      expect(radioElement.checked).toBe(label === value);

      const labelElement = getByText(label);
      expect(labelElement).toBeInTheDocument();
    });
  });

  it('triggers onChange when a radio option is selected', () => {
    const items = ['Option 1', 'Option 2', 'Option 3'];
    const onChange = jest.fn();
    const value = 'Option 2';
  
    const { getByLabelText } = render(
      <InputRadio name="test" items={items} value={value} onChange={onChange} />
    );
  
    const selectedOption = 'Option 3';
    const radioElement = getByLabelText(selectedOption) as HTMLInputElement;
  
    fireEvent.click(radioElement);
  
    expect(onChange).toHaveBeenCalledWith(selectedOption, value);
  });
  
});
