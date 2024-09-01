import type { Meta, StoryFn } from '@storybook/react';
import { ProductSlider } from './ProductSlider';

export default {
  title: 'Entities/Product/ProductSlider',
  component: ProductSlider,
} as Meta<typeof ProductSlider>;

const Template: StoryFn<typeof ProductSlider> = (args) => {
  return <ProductSlider {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      image: 'https://placehold.co/450x590/000000/FFE400/jpg',
      alt: 'alt 1',
    },
    {
      image: 'https://placehold.co/450x590/000000/FFB1F5/jpg',
      alt: 'alt 2',
    },
    {
      image: 'https://placehold.co/450x590/000000/FFE400/jpg',
      alt: 'alt 3',
    },
    {
      image: 'https://placehold.co/450x590/000000/FFB1F5/jpg',
      alt: 'alt 4',
    },
  ],
};
