import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ProductInfoDetailsItem } from './ProductInfoDetailsItem';

describe('InfoListItem Component', () => {
  test('renders label and children correctly', () => {
    const label = 'Test Label';
    const childrenText = 'Test Children';

    const { getByText } = render(
      <ProductInfoDetailsItem label={label}>
        {childrenText}
      </ProductInfoDetailsItem>,
    );

    const renderedLabel = getByText(label);
    const renderedChildren = getByText(childrenText);

    expect(renderedLabel).toBeInTheDocument();
    expect(renderedChildren).toBeInTheDocument();
  });
});
