import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ProductsFilter } from './ProductsFilter';

export default {
	title: 'Entities/Product/ProductsFilter',
	component: ProductsFilter,
} as Meta<typeof ProductsFilter>;

const Template: StoryFn<typeof ProductsFilter> = (args) => {
	return <ProductsFilter />;
};

export const Default = Template.bind({});
Default.args = {};