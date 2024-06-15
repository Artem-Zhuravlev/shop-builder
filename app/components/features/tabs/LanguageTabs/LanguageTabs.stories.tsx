import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { LanguageTabs } from './LanguageTabs';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Features/Tabs/LanguageTabs',
	component: LanguageTabs,
} as Meta<typeof LanguageTabs>;

const Template: StoryFn<typeof LanguageTabs> = (args) => {
	return (
		<LanguageTabs
			{...args}
			onSelect={action('onSelect')}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	items: ['ua', 'de', 'en', 'ru'],
	activeTab: 1,
};
