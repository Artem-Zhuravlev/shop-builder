import { Meta, StoryFn } from '@storybook/react';
import { ProductsFilter } from './ProductsFilter';

export default {
  title: 'Entities/Product/ProductsFilter',
  component: ProductsFilter,
} as Meta<typeof ProductsFilter>;

const Template: StoryFn<typeof ProductsFilter> = (args) => {
  return <ProductsFilter />;
};

export const Default = Template.bind({});
Default.args = {};
