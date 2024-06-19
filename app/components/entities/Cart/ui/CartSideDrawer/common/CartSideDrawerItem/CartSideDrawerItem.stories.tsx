import { Meta, StoryFn } from '@storybook/react';
import { CartSideDrawerItem } from './CartSideDrawerItem';

export default {
  title: 'Entities/Cart/CartSideDrawerItem',
  component: CartSideDrawerItem,
} as Meta<typeof CartSideDrawerItem>;

const Template: StoryFn<typeof CartSideDrawerItem> = (args) => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <CartSideDrawerItem {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 1,
  slug: 'slug',
  title: 'Product card',
  image: 'https://placehold.co/55x55/000000/FFE400/jpg',
  model: 'Product 19',
  price: 100,
  quantity: 3,
};
