import type { Meta, StoryFn } from '@storybook/react';
import { ProductInfo } from './ProductInfo';

export default {
  title: 'Entities/Product/ProductInfo',
  component: ProductInfo,
} as Meta<typeof ProductInfo>;

const Template: StoryFn<typeof ProductInfo> = (args) => {
  return (
    <div style={{ maxWidth: '570px' }}>
      <ProductInfo {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'iPod Nano',
  productCode: 'Product ipod',
  reviews: 3,
  brand: {
    name: 'HTC',
    to: '/htc',
  },
  viewed: 23211,
  rewardPoints: 400,
  availability: 'In stock',
  price: 1000,
  oldPrice: 1200,
  discount: 10,
  deadline: '2024-07-10',
};
