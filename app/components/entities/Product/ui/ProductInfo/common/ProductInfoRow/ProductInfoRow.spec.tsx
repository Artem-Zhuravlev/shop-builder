import { customRender } from '@utils/intlWrapper/IntlWrapper';
import { ProductInfoRow } from './ProductInfoRow';

describe('ProductInfoRow', () => {
  it('renders children correctly', () => {
    const { getByText } = customRender(
      <ProductInfoRow>
        <span>Test Child</span>
      </ProductInfoRow>,
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('applies custom className correctly', () => {
    const { container } = customRender(
      <ProductInfoRow className='custom-class'>
        <span>Test Child</span>
      </ProductInfoRow>,
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
