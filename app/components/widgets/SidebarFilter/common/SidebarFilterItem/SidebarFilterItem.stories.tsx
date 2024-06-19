import { Meta, StoryFn } from '@storybook/react';
import { SidebarFilterItem } from './SidebarFilterItem';

export default {
  title: 'Widgets/SidebarFilter/SidebarFilterItem',
  component: SidebarFilterItem,
} as Meta<typeof SidebarFilterItem>;

const Template: StoryFn<typeof SidebarFilterItem> = (args) => {
  return (
    <div
      style={{
        maxWidth: 270,
        border: '1px solid var(--gray-40)',
        padding: 'var(--size-small) var(--space-medium)',
      }}>
      <SidebarFilterItem {...args} />
    </div>
  );
};

const children = <div>Test content test content some mock data</div>;

export const Default = Template.bind({});
Default.args = {
  amount: 10,
  children,
};

export const NoAmount = Template.bind({});
NoAmount.args = {
  children,
};
