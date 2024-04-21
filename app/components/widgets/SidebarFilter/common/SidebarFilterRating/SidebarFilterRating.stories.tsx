import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SidebarFilterRating } from './SidebarFilterRating';

export default {
	title: 'Widgets/SidebarFilter/SidebarFilterRating',
	component: SidebarFilterRating,
} as Meta<typeof SidebarFilterRating>;

const Template: StoryFn<typeof SidebarFilterRating> = (args) => {
	return (
		<div style={{ maxWidth: 270, border: '1px solid var(--gray-40)' }}>
			<SidebarFilterRating {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			stars: 5,
			value: 10,
		},
		{
			stars: 4,
			value: 0,
		},
		{
			stars: 3,
			value: 30,
		},
		{
			stars: 2,
			value: 40,
		},
	],
};
