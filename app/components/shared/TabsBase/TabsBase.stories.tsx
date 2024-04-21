import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TabsBase } from './TabsBase';

export default {
	title: 'Shared/TabsBase',
	component: TabsBase,
} as Meta<typeof TabsBase>;

const Template: StoryFn<typeof TabsBase> = (args) => <TabsBase {...args} />;

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			label: 'Tab 1',
			description: 'Tab 1 description (1)',
		},
		{
			label: 'Tab 2',
			description: 'Tab 2 description (2)',
		},
		{
			label: 'Tab 3',
			description: 'Tab 3 description (3)',
		},
	],
};

export const WithActiveTab = Template.bind({});
WithActiveTab.args = {
	...Default.args,
	activeTab: 1,
};

export const WithOverActiveTabIndex = Template.bind({});
WithOverActiveTabIndex.args = {
	...Default.args,
	activeTab: 8,
};
