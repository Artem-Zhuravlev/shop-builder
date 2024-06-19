import { Meta, StoryFn } from '@storybook/react';
import { SidebarFilterAvailability } from './SidebarFilterAvailability';

export default {
  title: 'Widgets/SidebarFilter/SidebarFilterAvailability',
  component: SidebarFilterAvailability,
} as Meta<typeof SidebarFilterAvailability>;

const Template: StoryFn<typeof SidebarFilterAvailability> = (args) => {
  return (
    <div style={{ maxWidth: 270, border: '1px solid var(--gray-40)' }}>
      <SidebarFilterAvailability {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  inStock: 0,
  preOrder: 10,
};
