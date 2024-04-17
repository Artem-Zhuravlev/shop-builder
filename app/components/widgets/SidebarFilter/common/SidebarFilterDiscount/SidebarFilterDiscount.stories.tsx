import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SidebarFilterDiscount } from './SidebarFilterDiscount';

export default {
	title: 'Layout/SidebarFilter/SidebarFilterDiscount',
	component: SidebarFilterDiscount,
} as Meta<typeof SidebarFilterDiscount>;

const Template: StoryFn<typeof SidebarFilterDiscount> = (args) => {
	return (
		<div style={{ maxWidth: 270, border: '1px solid var(--gray-40)' }}>
			<SidebarFilterDiscount {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			discount: 10,
			value: 10,
		},
		{
			discount: 20,
			value: 20,
		},
		{
			discount: 30,
			value: 30,
		},
		{
			discount: 40,
			value: 40,
		},
		{
			discount: 50,
			value: 50,
		},
	],
};
