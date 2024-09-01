import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import { LanguageTabs } from './LanguageTabs';

export default {
  title: 'Features/Tabs/LanguageTabs',
  component: LanguageTabs,
} as Meta<typeof LanguageTabs>;

const Template: StoryFn<typeof LanguageTabs> = (args) => {
  return <LanguageTabs {...args} onSelect={action('onSelect')} />;
};

export const Default = Template.bind({});
Default.args = {
  items: ['ua', 'de', 'en', 'ru'],
  activeTab: 1,
};
