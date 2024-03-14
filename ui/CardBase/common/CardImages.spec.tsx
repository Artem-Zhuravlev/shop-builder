import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardImages } from './CardImages';

describe('CardImages Component', () => {
  it('renders images and link correctly', () => {
    const images = [
      { url: 'image1.jpg', alt: 'Image 1' },
      { url: 'image2.jpg', alt: 'Image 2' },
    ];
    const to = '/product';

    const { getAllByAltText, getByRole } = render(
      <CardImages to={to} images={images} />
    );

    const renderedImages = getAllByAltText(/Image/);
    expect(renderedImages).toHaveLength(images.length);

    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('href', to);
  });
});
