import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SidebarFilterAvailability } from './SidebarFilterAvailability';

export default {
	title: 'Layout/SidebarFilter/SidebarFilterAvailability',
	component: SidebarFilterAvailability,
} as Meta<typeof SidebarFilterAvailability>;

const Template: StoryFn<typeof SidebarFilterAvailability> = (args) => {
	return (
		<div style={{ maxWidth: 270, border: '1px solid var(--gray-40)' }}>
			<SidebarFilterAvailability {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	inStock: 10,
	preOrder: 10,
};
