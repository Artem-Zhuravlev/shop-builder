import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CategoriesDescription } from './CategoriesDescription';

export default {
	title: 'Categories/CategoriesDescription',
	component: CategoriesDescription,
} as Meta<typeof CategoriesDescription>;

const Template: StoryFn<typeof CategoriesDescription> = (args) => {
	return (
		<div style={{ maxWidth: '870px' }}>
			<CategoriesDescription {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	title: 'Desktops',
	image: 'https://placehold.co/180x108/000000/FFB1F5/jpg',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque. Facilisis leo vel fringilla est ullamcorper. Tellus id interdum velit laoreet id donec ultrices tincidunt. Vitae nunc sed velit dignissim sodales. Mi proin sed libero enim sed. Mi quis hendrerit dolor magna eget est lorem ipsum.',
};
