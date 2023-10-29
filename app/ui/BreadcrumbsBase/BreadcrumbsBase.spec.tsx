import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BreadcrumbsBase } from './BreadcrumbsBase';

describe('BreadcrumbsBase Component', () => {
  const mockPages = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Category', url: '/products/category' },
  ];

  it('renders breadcrumbs with correct labels and links', () => {
    const { getByTestId, getAllByRole, getByText } = render(
      <BreadcrumbsBase pages={mockPages} />
    );

    const breadcrumbsNav = getByTestId('breadcrumbs');
    const breadcrumbsList = breadcrumbsNav.querySelector('ul');
    const breadcrumbsItems = getAllByRole('listitem');

    expect(breadcrumbsNav).toBeInTheDocument();
    expect(breadcrumbsList).toBeInTheDocument();
    expect(breadcrumbsItems).toHaveLength(mockPages.length);

    mockPages.forEach((page, index) => {
      const breadcrumbItem = breadcrumbsItems[index];
      const breadcrumbLabel = getByText(page.label);

      expect(breadcrumbItem).toBeInTheDocument();

      if (page.url) {
        const breadcrumbLink = breadcrumbItem.querySelector('a');
        expect(breadcrumbLink).toBeInTheDocument();
        expect(breadcrumbLink).toHaveAttribute('href', page.url);
        expect(breadcrumbLabel).toBeInTheDocument();
      } else {
        expect(breadcrumbLabel).toBeInTheDocument();
      }
    });
  });

  it('renders breadcrumbs with correct labels and without links', () => {
    const mockPagesNoLinks = [
      { label: 'Home' },
      { label: 'About' },
      { label: 'Contact' },
    ];

    const { getByTestId, getAllByRole, getByText } = render(
      <BreadcrumbsBase pages={mockPagesNoLinks} />
    );

    const breadcrumbsNav = getByTestId('breadcrumbs');
    const breadcrumbsList = breadcrumbsNav.querySelector('ul');
    const breadcrumbsItems = getAllByRole('listitem');

    expect(breadcrumbsNav).toBeInTheDocument();
    expect(breadcrumbsList).toBeInTheDocument();
    expect(breadcrumbsItems).toHaveLength(mockPagesNoLinks.length);

    mockPagesNoLinks.forEach((page, index) => {
      const breadcrumbItem = breadcrumbsItems[index];
      const breadcrumbLabel = getByText(page.label);

      expect(breadcrumbItem).toBeInTheDocument();
      expect(breadcrumbLabel).toBeInTheDocument();

      const breadcrumbLink = breadcrumbItem.querySelector('a');
      expect(breadcrumbLink).toBeNull();
    });
  });
});
