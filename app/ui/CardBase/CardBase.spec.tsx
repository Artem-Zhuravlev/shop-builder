import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardBase } from './CardBase';

describe('CardBase Component', () => {
  const mockData = {
    to: '/product/123',
    slug: '123',
    item: {
      images: [
        { url: 'image1.jpg', alt: 'Image 1' },
        { url: 'image2.jpg', alt: 'Image 2' },
      ],
      title: 'Sample Product',
      rating: 4.5,
      price: 50,
      old_price: 70,
      tax: 10,
      symbol: '$',
    },
    addToCart: jest.fn(),
    addToFavorite: jest.fn(),
    quickView: jest.fn(),
    productCompare: jest.fn(),
  };

  it('calls appropriate functions when buttons are clicked', () => {
    const { slug, addToCart, addToFavorite, quickView, productCompare } = mockData;

    const { getByLabelText } = render(<CardBase {...mockData} />);

    // Simulate button clicks and check if corresponding functions are called
    fireEvent.click(getByLabelText('Add to card'));
    fireEvent.click(getByLabelText('Add to wish list'));
    fireEvent.click(getByLabelText('Quick view'));
    fireEvent.click(getByLabelText('Compare this Product'));

    expect(addToCart).toHaveBeenCalledWith(slug);
    expect(addToFavorite).toHaveBeenCalledWith(slug);
    expect(quickView).toHaveBeenCalledWith(slug);
    expect(productCompare).toHaveBeenCalledWith(slug);
  });
});
