import { Meta, StoryFn } from '@storybook/react';
import { ProductsSlider } from './ProductsSlider';

export default {
  title: 'Entities/Product/ProductsSlider',
  component: ProductsSlider,
} as Meta<typeof ProductsSlider>;

const Template: StoryFn<typeof ProductsSlider> = (args) => {
  return <ProductsSlider {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Best seller',
  items: [
    {
      slug: 'airpods',
      images: [
        {
          url: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
          alt: 'some alt',
        },
        {
          url: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UF1000,1000_QL80_.jpg',
          alt: 'some alt',
        },
      ],
      title: 'Airpods',
      rating: 4,
      price: 400,
      oldPrice: 450,
      tax: 10,
    },
    {
      slug: 'airpods',
      images: [
        {
          url: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
          alt: 'some alt',
        },
        {
          url: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UF1000,1000_QL80_.jpg',
          alt: 'some alt',
        },
      ],
      title: 'Airpods',
      rating: 4,
      price: 400,
      oldPrice: 450,
      tax: 10,
    },
    {
      slug: 'airpods',
      images: [
        {
          url: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
          alt: 'some alt',
        },
        {
          url: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UF1000,1000_QL80_.jpg',
          alt: 'some alt',
        },
      ],
      title: 'Airpods',
      rating: 4,
      price: 400,
      tax: 10,
    },
    {
      slug: 'airpods',
      images: [
        {
          url: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
          alt: 'some alt',
        },
        {
          url: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UF1000,1000_QL80_.jpg',
          alt: 'some alt',
        },
      ],
      title: 'Airpods',
      rating: 4,
      price: 400,
      oldPrice: 450,
    },
    {
      slug: 'airpods',
      images: [
        {
          url: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
          alt: 'some alt',
        },
        {
          url: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UF1000,1000_QL80_.jpg',
          alt: 'some alt',
        },
      ],
      title: 'Airpods',
      rating: 4,
      price: 400,
      oldPrice: 450,
      tax: 10,
    },
  ],
};
