import type { Meta, StoryFn } from '@storybook/react';
import { ProductReviewForm } from './ProductReviewForm';

export default {
  title: 'Entities/Product/ProductReviewForm',
  component: ProductReviewForm,
} as Meta<typeof ProductReviewForm>;

const Template: StoryFn<typeof ProductReviewForm> = (args) => {
  return (
    <div style={{ maxWidth: '532px' }}>
      <ProductReviewForm {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
