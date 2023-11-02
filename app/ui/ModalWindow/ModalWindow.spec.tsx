import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModalWindow from './ModalWindow';

describe('ModalWindow component', () => {
  test('renders with title and children when visible is true', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <ModalWindow title="Test Modal" visibility={true} onClose={onCloseMock}>
        <p>Modal Content</p>
      </ModalWindow>
    );

    expect(getByText('Test Modal')).toBeInTheDocument();
    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  test('does not render when visible is false', () => {
    const onCloseMock = jest.fn();
    const { queryByText } = render(
      <ModalWindow title="Test Modal" visibility={false} onClose={onCloseMock}>
        <p>Modal Content</p>
      </ModalWindow>
    );

    expect(queryByText('Test Modal')).not.toBeInTheDocument();
    expect(queryByText('Modal Content')).not.toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByRole } = render(
      <ModalWindow title="Test Modal" visibility={true} onClose={onCloseMock}>
        <p>Modal Content</p>
      </ModalWindow>
    );

    const closeButton = getByRole('button');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledWith(false);
  });

  test('calls onClose when Escape key is pressed', () => {
    const onCloseMock = jest.fn();
    render(
      <ModalWindow title="Test Modal" visibility={true} onClose={onCloseMock}>
        <p>Modal Content</p>
      </ModalWindow>
    );

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onCloseMock).toHaveBeenCalledWith(false);
  });
});
