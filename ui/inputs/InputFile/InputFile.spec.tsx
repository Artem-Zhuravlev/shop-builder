import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputFile } from './InputFile';

describe('InputFile Component', () => {
  it('triggers handleFile when a file is selected', () => {
    const mockHandleFile = jest.fn();

    const { getByText } = render(
      <InputFile handleFile={mockHandleFile} />
    );

    const uploadButton = getByText('Upload a file');
    fireEvent.click(uploadButton);

    const input = document.querySelector('input[type="file"]');

    if (input) {
      const file = new File(['file content'], 'file.txt', { type: 'text/plain' });
      fireEvent.change(input, { target: { files: [file] } });

      expect(mockHandleFile).toHaveBeenCalledWith(file);
    } else {
      throw new Error('Input element not found');
    }
  });

  it('logs an error when no file is selected', () => {
    const mockHandleFile = jest.fn();

    const errorSpy = jest.spyOn(console, 'error').mockImplementation();

    const { getByText } = render(
      <InputFile handleFile={mockHandleFile} />
    );

    const uploadButton = getByText('Upload a file');
    fireEvent.click(uploadButton);

    const input = document.querySelector('input[type="file"]');

    if (input) {
      fireEvent.change(input, { target: { files: [] } });

      expect(errorSpy).toHaveBeenCalledWith('No file selected.');
    } else {
      throw new Error('Input element not found');
    }

    errorSpy.mockRestore();
  });
});
