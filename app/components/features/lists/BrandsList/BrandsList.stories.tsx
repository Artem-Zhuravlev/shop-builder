import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { BrandsList } from './BrandsList';

export default {
	title: 'Lists/BrandsList',
	component: BrandsList,
} as Meta<typeof BrandsList>;

const Template: StoryFn<typeof BrandsList> = (args) => {
	return <BrandsList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	title: 'Shop by Brand',
	items: [
		{
			name: 'Coca-Cola',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/e/ed/Coca-Cola_Light_logo.png',
			to: '/coca-cola',
		},
		{
			name: 'Burger King',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Burger_King_1994_logo.svg/1200px-Burger_King_1994_logo.svg.png',
			to: '/burger-king',
		},
		{
			name: 'McDonalds',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/640px-McDonald%27s_Golden_Arches.svg.png',
			to: '/mcdonalds',
		},
		{
			name: 'Coca-Cola',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/e/ed/Coca-Cola_Light_logo.png',
			to: '/coca-cola',
		},
		{
			name: 'Burger King',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Burger_King_1994_logo.svg/1200px-Burger_King_1994_logo.svg.png',
			to: '/burger-king',
		},
		{
			name: 'McDonalds',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/640px-McDonald%27s_Golden_Arches.svg.png',
			to: '/mcdonalds',
		},
		{
			name: 'Coca-Cola',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/e/ed/Coca-Cola_Light_logo.png',
			to: '/coca-cola',
		},
		{
			name: 'Burger King',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Burger_King_1994_logo.svg/1200px-Burger_King_1994_logo.svg.png',
			to: '/burger-king',
		},
		{
			name: 'McDonalds',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/640px-McDonald%27s_Golden_Arches.svg.png',
			to: '/mcdonalds',
		},
	],
};
