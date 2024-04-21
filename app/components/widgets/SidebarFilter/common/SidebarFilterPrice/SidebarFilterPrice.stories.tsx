import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SidebarFilterPrice } from './SidebarFilterPrice';

export default {
	title: 'Widgets/SidebarFilter/SidebarFilterPrice',
	component: SidebarFilterPrice,
} as Meta<typeof SidebarFilterPrice>;

const Template: StoryFn<typeof SidebarFilterPrice> = (args) => {
	return (
		<div style={{ maxWidth: 270, border: '1px solid var(--gray-40)' }}>
			<SidebarFilterPrice />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {};
