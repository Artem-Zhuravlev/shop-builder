import { Meta, StoryFn } from '@storybook/react';
import { CartSideDrawer } from './CartSideDrawer';

export default {
  title: 'Entities/Cart/CartSideDrawer',
  component: CartSideDrawer,
} as Meta<typeof CartSideDrawer>;

const Template: StoryFn<typeof CartSideDrawer> = (args) => {
  return <CartSideDrawer {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
