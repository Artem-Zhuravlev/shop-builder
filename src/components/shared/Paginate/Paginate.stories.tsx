import type { Meta, StoryFn } from '@storybook/react';
import { Paginate } from './Paginate';

export default {
	title: 'Shared/Paginate',
	component: Paginate,
	argTypes: {
		onClick: { action: 'clicked' },
		onPageChange: { action: 'pageChanged' },
	},
} as Meta<typeof Paginate>;

const Template: StoryFn<typeof Paginate> = (args) => <Paginate {...args} />;

export const Default = Template.bind({});
Default.args = {};
