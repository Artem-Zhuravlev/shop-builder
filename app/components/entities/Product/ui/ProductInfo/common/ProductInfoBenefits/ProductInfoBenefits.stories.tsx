import { Meta, StoryFn } from '@storybook/react';
import { ProductInfoBenefits } from './ProductInfoBenefits';

export default {
  title: 'Entities/Product/ProductInfo/ProductInfoBenefits',
  component: ProductInfoBenefits,
} as Meta<typeof ProductInfoBenefits>;

const Template: StoryFn<typeof ProductInfoBenefits> = (args) => {
  return (
    <div style={{ maxWidth: '570px' }}>
      <ProductInfoBenefits {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
