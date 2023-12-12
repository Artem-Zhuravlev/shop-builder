import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconPicture } from './IconPicture';

test('renders IconPicture component', () => {
  const { container } = render(<IconPicture />);
  expect(container).toBeInTheDocument();
});

