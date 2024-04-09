import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SidebarFilterItem } from './SidebarFilterItem';

export default {
	title: 'Layout/SidebarFilter/SidebarFilterItem',
	component: SidebarFilterItem,
} as Meta<typeof SidebarFilterItem>;

const Template: StoryFn<typeof SidebarFilterItem> = (args) => {
	const [resetMode, setResetMode] = useState(args.resetMode || false);

	const handleReset = (value: boolean) => {
		setResetMode(value);
	};

	return (
		<div style={{ maxWidth: 270, border: '1px solid var(--gray-40)' }}>
			<SidebarFilterItem
				{...args}
				resetMode={resetMode}
				onReset={handleReset}
			/>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	title: 'Price',
	children: <div>Test content test content some mock data</div>,
	resetMode: true,
};
