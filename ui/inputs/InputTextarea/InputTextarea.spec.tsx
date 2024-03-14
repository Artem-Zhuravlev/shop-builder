import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputTextarea } from './InputTextarea';

describe('InputTextarea component', () => {
  it('renders textarea with the correct placeholder', () => {
    const placeholderText = 'Enter your text here';
    const { getByPlaceholderText } = render(
      <InputTextarea name="input" value="" onChange={() => {}} placeholder={placeholderText} />
    );
    const textareaElement = getByPlaceholderText(placeholderText) as HTMLTextAreaElement;
    expect(textareaElement).toBeInTheDocument();
  });

  it('handles textarea change correctly', () => {
    const { container } = render(
      <InputTextarea name="input" value="" onChange={() => {}} placeholder="Enter text" />
    );
    const textareaElement = container.querySelector('textarea') as HTMLTextAreaElement;
    fireEvent.change(textareaElement, { target: { value: 'Test Text' } });
    expect(textareaElement).toHaveValue('Test Text');
  });

  it('disables textarea when disabled prop is true', () => {
    const { container } = render(
      <InputTextarea name="input" value="" onChange={() => {}} placeholder="Enter text" disabled />
    );
    const textareaElement = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(textareaElement).toBeDisabled();
  });
});
