import { Meta, StoryFn } from '@storybook/react';
import { ProductInfoReviews } from './ProductInfoReviews';

export default {
  title: 'Entities/Product/ProductInfo/ProductInfoReviews',
  component: ProductInfoReviews,
} as Meta<typeof ProductInfoReviews>;

const Template: StoryFn<typeof ProductInfoReviews> = (args) => {
  return (
    <div style={{ maxWidth: '570px' }}>
      <ProductInfoReviews {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  productCode: 'Product Code',
  rating: 2,
  reviews: 3,
};
