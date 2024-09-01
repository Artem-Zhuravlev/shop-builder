import type { Meta, StoryFn } from '@storybook/react';
import { ProductInfoControls } from './ProductInfoControls';

export default {
  title: 'Entities/Product/ProductInfo/ProductInfoControls',
  component: ProductInfoControls,
} as Meta<typeof ProductInfoControls>;

const Template: StoryFn<typeof ProductInfoControls> = (args) => {
  return (
    <div style={{ maxWidth: '570px' }}>
      <ProductInfoControls {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
