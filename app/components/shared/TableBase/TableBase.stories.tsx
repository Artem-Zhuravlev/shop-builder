import { Meta, StoryFn } from '@storybook/react';
import { TableBase } from './TableBase';

interface TableItem {
  id: string | number;
  name: string;
  age: number;
  address: string;
}

export default {
  title: 'Shared/TableBase',
  component: TableBase,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta<typeof TableBase>;

const Template: StoryFn<typeof TableBase<TableItem>> = (args) => (
  <TableBase<TableItem> {...args} />
);

export const Default = Template.bind({});
Default.args = {
  columns: [
    {
      label: 'Name',
      renderCell: (item: TableItem) => item.name,
    },
    {
      label: 'Age',
      renderCell: (item: TableItem) => item.age,
    },
    {
      label: 'Address',
      renderCell: (item: TableItem) => item.address,
    },
  ],
  data: [
    { id: 1, name: 'Jack', age: 28, address: 'some where' },
    { id: 2, name: 'Rose', age: 36, address: 'some where' },
  ],
};
