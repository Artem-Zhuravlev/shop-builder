import { Meta, StoryFn } from '@storybook/react';
import { TheFooter } from './TheFooter';

export default {
  title: 'Widgets/TheFooter',
  component: TheFooter,
} as Meta<typeof TheFooter>;

const Template: StoryFn<typeof TheFooter> = (args) => <TheFooter {...args} />;

export const Default = Template.bind({});
Default.args = {};
