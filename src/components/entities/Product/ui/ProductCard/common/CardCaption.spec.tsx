import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { CardCaption } from './CardCaption';

describe('CardCaption component', () => {
  test('renders CardCaption component with correct title and rating', () => {
    const mockTo = '/some-link';
    const mockTitle = 'Sample Title';
    const mockRating = 4;

    const { getByText } = render(
      <CardCaption to={mockTo} title={mockTitle} rating={mockRating} />,
    );

    const titleElement = getByText(mockTitle);
    expect(titleElement).toBeInTheDocument();

    const linkElement = titleElement.closest('a');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', mockTo);
  });
});
