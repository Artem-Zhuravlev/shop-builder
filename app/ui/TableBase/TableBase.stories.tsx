import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TableBase } from './TableBase';

export default {
  title: 'Table/TableBase',
  component: TableBase,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta<typeof TableBase>;

const Template: StoryFn<typeof TableBase> = (args) => <TableBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 100,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 200,
    }
  ],
  data: [
    { name: 'Jack', age: 28, address: 'some where', key: '1' },
    { name: 'Rose', age: 36, address: 'some where', key: '2' },
  ]
};
