import type { Meta, StoryFn } from '@storybook/react';
import { SkeletonBase } from './SkeletonBase';

export default {
	title: 'Shared/SkeletonBase',
	component: SkeletonBase,
} as Meta<typeof SkeletonBase>;

const Template: StoryFn<typeof SkeletonBase> = (args) => (
	<SkeletonBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
	width: '200px',
	height: '200px',
};
