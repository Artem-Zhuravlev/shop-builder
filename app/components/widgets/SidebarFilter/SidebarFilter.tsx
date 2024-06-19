import { FC, useState } from 'react';
import cls from './SidebarFilter.module.scss';
import { SidebarFilterAvailability } from './common/SidebarFilterAvailability/SidebarFilterAvailability';
import { SidebarFilterColor } from './common/SidebarFilterColor/SidebarFilterColor';
import { SidebarFilterDiscount } from './common/SidebarFilterDiscount/SidebarFilterDiscount';
import { SidebarFilterManufacturer } from './common/SidebarFilterManufacturer/SidebarFilterManufacturer';
import { SidebarFilterPrice } from './common/SidebarFilterPrice/SidebarFilterPrice';
import { SidebarFilterRating } from './common/SidebarFilterRating/SidebarFilterRating';
import { SidebarFilterSearch } from './common/SidebarFilterSearch/SidebarFilterSearch';
import { SidebarFilterSize } from './common/SidebarFilterSize/SidebarFilterSize';

export const SidebarFilter: FC = () => {
  const [data, setData] = useState({
    price: {
      min: 0,
      max: 100,
      default_min: 0,
      default_max: 100,
    },
    manufacturers: [
      {
        image: 'https://placehold.co/30x30',
        title: 'Apple',
        amount: 10,
        slug: 'apple',
      },
      {
        image: 'https://placehold.co/30x30',
        title: 'Canon',
        amount: 2,
        slug: 'canon',
      },
      {
        image: 'https://placehold.co/30x30',
        title: 'Hewlett Packard',
        amount: 2,
        slug: 'hewlett_packard',
      },
      {
        image: 'https://placehold.co/30x30',
        title: 'HTC',
        amount: 1,
        slug: 'htc',
      },
      {
        image: 'https://placehold.co/30x30',
        title: 'Nikon',
        amount: 1,
        slug: 'nikon',
      },
      {
        image: 'https://placehold.co/30x30',
        title: 'Palm',
        amount: 1,
        slug: 'palm',
      },
      {
        image: 'https://placehold.co/30x30',
        title: 'Sony',
        amount: 1,
        slug: 'sony',
      },
    ],
    colors: [
      { color: '#001df2', value: 'blue', tip: 'Blue' },
      { color: '#f20794', value: 'pink', tip: 'Pink' },
      { color: '#000000', value: 'black', tip: 'Black' },
      { color: '#f18309', value: 'orange', tip: 'Orange' },
      { color: '#f00100', value: 'red', tip: 'Red' },
      { color: '#b82b2b', value: 'brown', tip: 'Brown' },
      { color: '#2bce01', value: 'salad', tip: 'Salad' },
      { color: '#e5f002', value: 'yellow', tip: 'Yellow' },
    ],
    availability: {
      in_stock: 10,
      pre_order: 20,
    },
    sizes: ['L', 'M', 'S', 'XL', 'XXL'],
    discounts: [
      {
        discount: 10,
        value: 10,
      },
      {
        discount: 20,
        value: 20,
      },
      {
        discount: 30,
        value: 30,
      },
      {
        discount: 40,
        value: 0,
      },
      {
        discount: 50,
        value: 50,
      },
    ],
    ratings: [
      {
        stars: 5,
        value: 10,
      },
      {
        stars: 4,
        value: 0,
      },
      {
        stars: 3,
        value: 30,
      },
      {
        stars: 2,
        value: 40,
      },
    ],
  });

  return (
    <aside className={cls.SidebarFilter}>
      <SidebarFilterPrice
        min={data.price.min}
        max={data.price.max}
        defaultMin={data.price.default_min}
        defaultMax={data.price.default_max}
      />
      <SidebarFilterManufacturer items={data.manufacturers} />
      <SidebarFilterSearch />
      <SidebarFilterColor items={data.colors} />
      <SidebarFilterAvailability
        inStock={data.availability.in_stock}
        preOrder={data.availability.pre_order}
      />
      <SidebarFilterSize items={data.sizes} />
      <SidebarFilterDiscount items={data.discounts} />
      <SidebarFilterRating items={data.ratings} />
    </aside>
  );
};

SidebarFilter.displayName = 'SidebarFilter';
