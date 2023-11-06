import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InfoList, Availability } from './InfoList';

const mockItem = {
  brand: {
    name: 'Test Brand',
    url: '/test-url',
  },
  viewed: 100,
  reward_points: 50,
  availability: Availability.IN_STOCK
};

describe('InfoList Component', () => {
  test('renders brand, viewed, reward points, and availability', () => {
    const { container, getByText } = render(<InfoList item={mockItem} />);

    const brandElement = getByText(mockItem.brand.name);
    const viewedElement = getByText(mockItem.viewed.toString());
    expect(brandElement).toBeInTheDocument();
    expect(viewedElement).toBeInTheDocument();

    const rewardPointsElement = getByText(mockItem.reward_points.toString());
    expect(rewardPointsElement).toBeInTheDocument();

    const availabilityElement = getByText(mockItem.availability);
    expect(availabilityElement).toBeInTheDocument();
    expect(availabilityElement).toHaveClass('InStock'); // Assuming 'InStock' class is present

    const linkElement = container.querySelector('a[href="/test-url"]');
    expect(linkElement).toBeInTheDocument();
  });

  test('does not render reward points and availability if not present in the item', () => {
    const itemWithoutOptionalProps = {
      brand: {
        name: 'Test Brand',
        url: '/test-url',
      },
      viewed: 100,
    };

    const { queryByText } = render(<InfoList item={itemWithoutOptionalProps} />);

    const rewardPointsElement = queryByText('Reward Points');
    const availabilityElement = queryByText('Availability');
    expect(rewardPointsElement).toBeNull();
    expect(availabilityElement).toBeNull();
  });
});
