import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCardSmall } from './ProductCardSmall';

describe('ProductCardSmall', () => {
	test('renders product card with correct props', () => {
		const props = {
			to: '/product/123',
			image: 'image-url.jpg',
			rating: 4.5,
			title: 'Example Product',
			price: 20,
			symbol: '$',
		};

		const { getByAltText, getByText } = render(<ProductCardSmall {...props} />);

		const productImage = getByAltText(props.title);
		expect(productImage).toBeInTheDocument();
		expect(productImage).toHaveAttribute('src', props.image);

		const productTitle = getByText(props.title);
		expect(productTitle).toBeInTheDocument();
		expect(productTitle.closest('a')).toHaveAttribute('href', props.to);

		const productPrice = getByText(`${props.price} ${props.symbol}`);
		expect(productPrice).toBeInTheDocument();
	});
});
