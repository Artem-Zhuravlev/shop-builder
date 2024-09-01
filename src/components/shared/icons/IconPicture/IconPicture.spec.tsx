import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { IconPicture } from './IconPicture';

test('renders IconPicture component', () => {
  const { container } = render(<IconPicture />);
  expect(container).toBeInTheDocument();
});
