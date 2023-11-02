import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

describe('Label component', () => {
  it('renders label with the name and children', () => {
    const labelText = 'Email';
    const { getByText } = render(
      <Label name={labelText}>
        <input type="text" />
      </Label>
    );

    const labelElement = getByText(labelText);
    expect(labelElement).toBeInTheDocument();

    const inputElement = getByText('Email');
    expect(inputElement).toBeInTheDocument();
  });

  it('toggles the eye icon when clicked', () => {
    const labelText = 'Password';
    const mockClick = jest.fn();
    const { getByRole } = render(
      <Label name={labelText} onSuffixClick={mockClick}>
        <input type="password" />
      </Label>
    );
  
    const eyeIcon = getByRole('button');
    fireEvent.click(eyeIcon);
  
    expect(mockClick).toHaveBeenCalled();
  });
});
