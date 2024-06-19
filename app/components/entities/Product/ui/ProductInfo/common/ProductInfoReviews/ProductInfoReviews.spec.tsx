import { customRender } from '@utils/intlWrapper/IntlWrapper';
import { ProductInfoReviews } from './ProductInfoReviews';

describe('ProductInfoReviews', () => {
  it('renders product information correctly', () => {
    const productCode = 'ABC123';
    const rating = 4.5;
    const reviews = 20;

    const { getByText } = customRender(
      <ProductInfoReviews
        productCode={productCode}
        rating={rating}
        reviews={reviews}
      />,
    );

    expect(getByText(`${rating}/5`)).toBeInTheDocument();
    expect(getByText(`20 Reviews`)).toBeInTheDocument();
    expect(getByText(`${productCode}`)).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    customRender(<ProductInfoReviews productCode='' rating={0} reviews={0} />);
  });
});
