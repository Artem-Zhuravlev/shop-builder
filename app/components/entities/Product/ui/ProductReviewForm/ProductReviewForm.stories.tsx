import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ProductReviewForm } from './ProductReviewForm';

export default {
	title: 'Product/ProductReviewForm',
	component: ProductReviewForm,
} as Meta<typeof ProductReviewForm>;

const Template: StoryFn<typeof ProductReviewForm> = (args) => {
	return (
		<div style={{ maxWidth: '532px' }}>
			<ProductReviewForm {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {};
