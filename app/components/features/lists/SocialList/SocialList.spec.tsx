import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SocialList } from './SocialList';

describe('SocialList Component', () => {
  test('renders social items with correct URLs and icons', () => {
    const mockItems = [
      { url: 'https://example.com/facebook', icon: 'facebook' },
      { url: 'https://example.com/twitter', icon: 'twitter' }
    ];

    const { container } = render(<SocialList items={mockItems} />);

    mockItems.forEach((item) => {
      const socialLink = container.querySelector(`a[href="${item.url}"]`);
      expect(socialLink).toBeInTheDocument();

      const socialIcon = container.querySelector(`.icon-${item.icon}`);
      expect(socialIcon).toBeInTheDocument();
    });
  });
});
