import { Meta, StoryFn } from '@storybook/react';
import { SidebarFilterColor } from './SidebarFilterColor';

export default {
  title: 'Widgets/SidebarFilter/SidebarFilterColor',
  component: SidebarFilterColor,
} as Meta<typeof SidebarFilterColor>;

const Template: StoryFn<typeof SidebarFilterColor> = (args) => {
  return (
    <div style={{ maxWidth: 270, border: '1px solid var(--gray-40)' }}>
      <SidebarFilterColor {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { color: '#001df2', value: 'blue', tip: 'Blue' },
    { color: '#f20794', value: 'pink', tip: 'Pink' },
    { color: '#000000', value: 'black', tip: 'Black' },
    { color: '#f18309', value: 'orange', tip: 'Orange' },
    { color: '#f00100', value: 'red', tip: 'Red' },
    { color: '#b82b2b', value: 'brown', tip: 'Brown' },
    { color: '#2bce01', value: 'salad', tip: 'Salad' },
    { color: '#e5f002', value: 'yellow', tip: 'Yellow' },
  ],
};
