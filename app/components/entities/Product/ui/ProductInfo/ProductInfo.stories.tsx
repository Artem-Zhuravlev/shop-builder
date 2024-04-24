import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ProductInfo } from './ProductInfo';

export default {
	title: 'Entities/Product/ProductInfo',
	component: ProductInfo,
} as Meta<typeof ProductInfo>;

const Template: StoryFn<typeof ProductInfo> = (args) => {
	return (
		<div style={{ maxWidth: '570px' }}>
			<ProductInfo {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	title: 'iPod Nano',
	productCode: 'Product ipod',
	reviews: 3,
};
