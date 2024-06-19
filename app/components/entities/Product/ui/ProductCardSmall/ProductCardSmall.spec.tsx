import '@testing-library/jest-dom';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import { ProductCardSmall } from './ProductCardSmall';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('ProductCardSmall', () => {
  test('renders product card with correct props', () => {
    const props = {
      to: '/product/123',
      image: '/image-url.jpg',
      rating: 4.5,
      title: 'Example Product',
      price: 20,
      currency: '$',
    };

    const { getByAltText, getByText } = customRender(
      <ProductCardSmall {...props} />,
    );

    const productImage = getByAltText(props.title);
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', props.image);

    const productTitle = getByText(props.title);
    expect(productTitle).toBeInTheDocument();
    expect(productTitle.closest('a')).toHaveAttribute('href', props.to);

    const productPrice = getByText(`${props.price} ${props.currency}`);
    expect(productPrice).toBeInTheDocument();
  });
});
