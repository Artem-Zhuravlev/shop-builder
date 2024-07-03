import { Meta, StoryFn } from '@storybook/react';
import { AdminOrdersTable } from './AdminOrdersTable';

export default {
  title: 'Entities/Admin/Orders/AdminOrdersTable',
  component: AdminOrdersTable,
} as Meta<typeof AdminOrdersTable>;

const Template: StoryFn<typeof AdminOrdersTable> = (args) => {
  return <AdminOrdersTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  nodes: [
    {
      id: 1,
      order_id: 100,
      customer: 'John Doe',
      status: 'Pending',
      total: '105.00',
      date_added: '2024-10-10',
    },
    {
      id: 2,
      order_id: 101,
      customer: 'Jane Smith',
      status: 'Shipped',
      total: '150.50',
      date_added: '2024-10-11',
    },
    {
      id: 3,
      order_id: 102,
      customer: 'Alice Johnson',
      status: 'Delivered',
      total: '200.75',
      date_added: '2024-10-12',
    },
    {
      id: 4,
      order_id: 103,
      customer: 'Bob Brown',
      status: 'Pending',
      total: '120.00',
      date_added: '2024-10-13',
    },
    {
      id: 5,
      order_id: 104,
      customer: 'Charlie Davis',
      status: 'Cancelled',
      total: '80.25',
      date_added: '2024-10-14',
    },
    {
      id: 6,
      order_id: 105,
      customer: 'Diana Evans',
      status: 'Processing',
      total: '95.50',
      date_added: '2024-10-15',
    },
    {
      id: 7,
      order_id: 106,
      customer: 'Eve Foster',
      status: 'Pending',
      total: '110.00',
      date_added: '2024-10-16',
    },
    {
      id: 8,
      order_id: 107,
      customer: 'Frank Green',
      status: 'Shipped',
      total: '130.75',
      date_added: '2024-10-17',
    },
    {
      id: 9,
      order_id: 108,
      customer: 'Grace Harris',
      status: 'Delivered',
      total: '145.00',
      date_added: '2024-10-18',
    },
    {
      id: 10,
      order_id: 109,
      customer: 'Hank Irving',
      status: 'Cancelled',
      total: '65.00',
      date_added: '2024-10-19',
    },
    {
      id: 11,
      order_id: 110,
      customer: 'Ivy Jackson',
      status: 'Processing',
      total: '90.75',
      date_added: '2024-10-20',
    },
    {
      id: 12,
      order_id: 111,
      customer: 'Jack King',
      status: 'Pending',
      total: '115.50',
      date_added: '2024-10-21',
    },
    {
      id: 13,
      order_id: 112,
      customer: 'Kate Lewis',
      status: 'Shipped',
      total: '160.25',
      date_added: '2024-10-22',
    },
    {
      id: 14,
      order_id: 113,
      customer: 'Luke Miller',
      status: 'Delivered',
      total: '175.00',
      date_added: '2024-10-23',
    },
    {
      id: 15,
      order_id: 114,
      customer: 'Mia Nelson',
      status: 'Cancelled',
      total: '70.25',
      date_added: '2024-10-24',
    },
    {
      id: 16,
      order_id: 115,
      customer: 'Nina Owens',
      status: 'Processing',
      total: '100.50',
      date_added: '2024-10-25',
    },
  ],
};
