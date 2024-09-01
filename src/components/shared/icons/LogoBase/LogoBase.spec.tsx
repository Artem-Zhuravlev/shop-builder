import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { LogoBase } from './LogoBase';

test('renders LogoBase component', () => {
  const { container } = render(<LogoBase />);
  expect(container).toBeInTheDocument();
});
