import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CardBase } from './CardBase';

export default {
  title: 'Cards/CardBase',
  component: CardBase,
} as Meta<typeof CardBase>;

const Template: StoryFn<typeof CardBase> = (args) => {
  return (
    <div style={{ maxWidth: '320px' }}>
      <CardBase {...args} />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  to: '/card',
  slug: 'airpods',
  item: {
    images: [
      {
        url: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
        alt: 'some alt'
      },
      {
        url:'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UF1000,1000_QL80_.jpg',
        alt: 'some alt'
      }
    ],
    title: 'Airpods',
    rating: 4,
    price: 400,
    old_price: 450,
    tax: 10
  }
};

