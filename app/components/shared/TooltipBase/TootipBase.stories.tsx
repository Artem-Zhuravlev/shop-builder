import { Meta, StoryFn } from '@storybook/react';
import { TooltipBase } from './TooltipBase';

export default {
  title: 'Shared/Tooltip',
  component: TooltipBase,
} as Meta<typeof TooltipBase>;

const Template: StoryFn<typeof TooltipBase> = (args) => (
  <TooltipBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: 'Some content',
  children: <button>Some cool button</button>,
};
