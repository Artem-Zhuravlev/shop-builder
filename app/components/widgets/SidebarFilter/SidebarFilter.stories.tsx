import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SidebarFilter } from './SidebarFilter';

export default {
	title: 'Layout/SidebarFilter',
	component: SidebarFilter,
} as Meta<typeof SidebarFilter>;

const Template: StoryFn<typeof SidebarFilter> = (args) => {
	return (
		<div style={{ maxWidth: 270 }}>
			<SidebarFilter {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {};
