import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DiscountTimer } from './DiscountTimer';

export default {
	title: 'Features/Timers/DiscountTimer',
	component: DiscountTimer,
} as Meta<typeof DiscountTimer>;

const Template: StoryFn<typeof DiscountTimer> = (args) => {
	return <DiscountTimer {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	title: 'End of season sale',
	image: 'https://placehold.co/600x300?text=Mock+image',
	deadline: '2024-07-10',
	discount: 20,
};
