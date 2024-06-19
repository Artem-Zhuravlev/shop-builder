import { Meta, StoryFn } from '@storybook/react';
import { ProductInfoDetails } from './ProductInfoDetails';

export default {
  title: 'Entities/Product/ProductInfo/ProductInfoDetails',
  component: ProductInfoDetails,
} as Meta<typeof ProductInfoDetails>;

const Template: StoryFn<typeof ProductInfoDetails> = (args) => {
  return (
    <div style={{ maxWidth: '570px' }}>
      <ProductInfoDetails {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  brand: {
    name: 'HTC',
    to: '/htc',
  },
  viewed: 23211,
  rewardPoints: 400,
  availability: 'In stock',
};

export const OutOfStock = Template.bind({});
OutOfStock.args = {
  brand: {
    name: 'HTC',
    to: '/htc',
  },
  viewed: 23211,
  rewardPoints: 400,
  availability: 'Out of stock',
};

export const WithoutRewardPoints = Template.bind({});
WithoutRewardPoints.args = {
  brand: {
    name: 'HTC',
    to: '/htc',
  },
  viewed: 23211,
  availability: 'Out of stock',
};

export const WithoutAvailability = Template.bind({});
WithoutAvailability.args = {
  brand: {
    name: 'HTC',
    to: '/htc',
  },
  viewed: 23211,
};
