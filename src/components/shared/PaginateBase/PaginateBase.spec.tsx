import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { PaginateBase } from './PaginateBase';

describe('PaginateBase component', () => {
  test('calls onPageChange when a page is clicked', () => {
    const onPageChangeMock = jest.fn();
    const pageCount = 10;

    const { getAllByRole } = render(
      <PaginateBase onPageChange={onPageChangeMock} pageCount={pageCount} />,
    );

    const pages = getAllByRole('button', { name: /Page \d+/ });
    fireEvent.click(pages[2]);

    expect(onPageChangeMock).toHaveBeenCalledWith(
      expect.objectContaining({ selected: 2 }),
    );
  });
});
