import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { SidebarToggler } from './SidebarToggler';

export default {
  title: 'Widgets/SidebarFilter/SidebarToggler',
  component: SidebarToggler,
} as Meta<typeof SidebarToggler>;

const Template: StoryFn<typeof SidebarToggler> = (args) => {
  const [resetMode, setResetMode] = useState(args.resetMode || false);

  const handleReset = (value: boolean) => {
    setResetMode(value);
  };

  return (
    <div style={{ maxWidth: 270, border: '1px solid var(--gray-40)' }}>
      <SidebarToggler {...args} resetMode={resetMode} onReset={handleReset} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Price',
  children: <div>Test content test content some mock data</div>,
  resetMode: true,
};
