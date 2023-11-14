import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LogoBase } from './LogoBase';

test('renders LogoBase component', () => {
  const { container } = render(<LogoBase />);
  expect(container).toBeInTheDocument();
});

