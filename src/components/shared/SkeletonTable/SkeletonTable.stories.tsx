import type { Meta, StoryFn } from '@storybook/react';
import { SkeletonTable } from './SkeletonTable';

export default {
	title: 'Shared/SkeletonTable',
	component: SkeletonTable,
} as Meta<typeof SkeletonTable>;

const Template: StoryFn<typeof SkeletonTable> = (args) => (
	<SkeletonTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
	rows: 4,
	cellsGrid: '1fr 1fr 1fr',
};

export const WithTwoCells = Template.bind({});
WithTwoCells.args = {
	rows: 4,
	cellsGrid: '2fr 1fr',
};
