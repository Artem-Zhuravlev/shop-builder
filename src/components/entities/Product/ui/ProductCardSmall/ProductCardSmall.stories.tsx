import type { Meta, StoryFn } from '@storybook/react';
import { ProductCardSmall } from './ProductCardSmall';

export default {
  title: 'Entities/Product/ProductCardSmall',
  component: ProductCardSmall,
} as Meta<typeof ProductCardSmall>;

const Template: StoryFn<typeof ProductCardSmall> = (args) => {
  return (
    <div style={{ maxWidth: '320px' }}>
      <ProductCardSmall {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  rating: 4,
  to: '/card',
  price: 400,
  title: 'Airpods',
  image:
    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
};
