import type { Meta, StoryFn } from '@storybook/react';
import { AdminProductsTable } from './AdminProductsTable';

export default {
  title: 'Entities/Admin/Products/AdminProductsTable',
  component: AdminProductsTable,
} as Meta<typeof AdminProductsTable>;

const Template: StoryFn<typeof AdminProductsTable> = (args) => {
  return <AdminProductsTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  nodes: [
    {
      id: 1,
      image: {
        id: 1,
        url: 'https://picsum.photos/200/300',
        alt: 'image',
      },
      product_name: 'Apple Cinema 30"',
      model: 'Product 15',
      price: '90.00',
      old_price: '100.00',
      slug: 'product-1',
      quantity: 10,
      status: 'Enabled',
    },
    {
      id: 2,
      image: {
        id: 2,
        url: 'https://picsum.photos/200/301',
        alt: 'image',
      },
      product_name: 'Samsung Galaxy S21',
      model: 'Product 21',
      price: '800.00',
      old_price: '850.00',
      slug: 'product-2',
      quantity: 20,
      status: 'Enabled',
    },
    {
      id: 3,
      image: {
        id: 3,
        url: 'https://picsum.photos/200/302',
        alt: 'image',
      },
      product_name: 'Sony WH-1000XM4',
      model: 'Product 34',
      price: '300.00',
      old_price: '350.00',
      slug: 'product-3',
      quantity: 15,
      status: 'Enabled',
    },
    {
      id: 4,
      image: {
        id: 4,
        url: 'https://picsum.photos/200/303',
        alt: 'image',
      },
      product_name: 'Dell XPS 13',
      model: 'Product 45',
      price: '1200.00',
      old_price: '1300.00',
      slug: 'product-4',
      quantity: 5,
      status: 'Enabled',
    },
    {
      id: 5,
      image: {
        id: 5,
        url: 'https://picsum.photos/200/304',
        alt: 'image',
      },
      product_name: 'Bose QuietComfort 35 II',
      model: 'Product 56',
      price: '250.00',
      old_price: '300.00',
      slug: 'product-5',
      quantity: 8,
      status: 'Enabled',
    },
    {
      id: 6,
      image: {
        id: 6,
        url: 'https://picsum.photos/200/305',
        alt: 'image',
      },
      product_name: 'Apple MacBook Pro',
      model: 'Product 67',
      price: '2000.00',
      old_price: '2200.00',
      slug: 'product-6',
      quantity: 3,
      status: 'Enabled',
    },
    {
      id: 7,
      image: {
        id: 7,
        url: 'https://picsum.photos/200/306',
        alt: 'image',
      },
      product_name: 'Google Pixel 5',
      model: 'Product 78',
      price: '700.00',
      old_price: '750.00',
      slug: 'product-7',
      quantity: 12,
      status: 'Enabled',
    },
    {
      id: 8,
      image: {
        id: 8,
        url: 'https://picsum.photos/200/307',
        alt: 'image',
      },
      product_name: 'Microsoft Surface Pro 7',
      model: 'Product 89',
      price: '1000.00',
      old_price: '1100.00',
      slug: 'product-8',
      quantity: 0,
      status: 'Enabled',
    },
    {
      id: 9,
      image: {
        id: 9,
        url: 'https://picsum.photos/200/308',
        alt: 'image',
      },
      product_name: 'Sony PlayStation 5',
      model: 'Product 91',
      price: '500.00',
      slug: 'product-9',
      quantity: 25,
      status: 'Enabled',
    },
    {
      id: 10,
      image: {
        id: 10,
        url: 'https://picsum.photos/200/309',
        alt: 'image',
      },
      product_name: 'Amazon Echo Dot',
      model: 'Product 102',
      price: '50.00',
      old_price: '60.00',
      slug: 'product-10',
      quantity: 30,
      status: 'Enabled',
    },
  ],
};
