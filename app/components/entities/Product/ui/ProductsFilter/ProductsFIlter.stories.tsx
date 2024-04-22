import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ProductsFilter } from './ProductsFilter';

export default {
	title: 'Entities/Product/ProductsFilter',
	component: ProductsFilter,
} as Meta<typeof ProductsFilter>;

const Template: StoryFn<typeof ProductsFilter> = (args) => {
	const handleSwitchLayout = (value: string) => {
		action('switch layout')(value);
	};

	return <ProductsFilter handleSwitchLayout={handleSwitchLayout} />;
};

export const Default = Template.bind({});
Default.args = {};
