import { Meta, StoryFn } from '@storybook/react';
import { ProductInfoPrice } from './ProductInfoPrice';

export default {
  title: 'Entities/Product/ProductInfo/ProductInfoPrice',
  component: ProductInfoPrice,
} as Meta<typeof ProductInfoPrice>;

const Template: StoryFn<typeof ProductInfoPrice> = (args) => {
  return (
    <div style={{ maxWidth: '570px' }}>
      <ProductInfoPrice {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  price: 200,
  oldPrice: 300,
  discount: 20,
  deadline: '2024-07-10',
};
