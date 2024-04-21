import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SidebarFilterManufacturer } from './SidebarFilterManufacturer';

export default {
	title: 'Widgets/SidebarFilter/SidebarFilterManufacturer',
	component: SidebarFilterManufacturer,
} as Meta<typeof SidebarFilterManufacturer>;

const Template: StoryFn<typeof SidebarFilterManufacturer> = (args) => {
	return (
		<div style={{ maxWidth: 270, border: '1px solid var(--gray-40)' }}>
			<SidebarFilterManufacturer {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			image: 'https://placehold.co/30x30',
			title: 'Apple',
			amount: 10,
			slug: 'apple',
		},
		{
			image: 'https://placehold.co/30x30',
			title: 'Canon',
			amount: 2,
			slug: 'canon',
		},
		{
			image: 'https://placehold.co/30x30',
			title: 'Hewlett Packard',
			amount: 2,
			slug: 'hewlett_packard',
		},
		{
			image: 'https://placehold.co/30x30',
			title: 'HTC',
			amount: 1,
			slug: 'htc',
		},
		{
			image: 'https://placehold.co/30x30',
			title: 'Nikon',
			amount: 1,
			slug: 'nikon',
		},
		{
			image: 'https://placehold.co/30x30',
			title: 'Palm',
			amount: 1,
			slug: 'palm',
		},
		{
			image: 'https://placehold.co/30x30',
			title: 'Sony',
			amount: 1,
			slug: 'sony',
		},
	],
};
