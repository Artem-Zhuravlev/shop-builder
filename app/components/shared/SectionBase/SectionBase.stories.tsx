import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SectionBase } from './SectionBase';

export default {
	title: 'Layout/SectionBase',
	component: SectionBase,
	argTypes: {
		onClick: { action: 'clicked' },
		onPageChange: { action: 'pageChanged' },
	},
} as Meta<typeof SectionBase>;

const Template: StoryFn<typeof SectionBase> = (args) => (
	<SectionBase {...args} />
);

const content = {
	title: 'Shop by Brand',
	children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo gravida, iaculis felis eu, cursus urna. Proin tristique hendrerit justo, eu semper augue porta sit amet. Cras quis commodo erat. Etiam lacinia purus sapien, id fringilla odio facilisis at. Pellentesque at maximus ipsum. Aliquam risus sapien, auctor id scelerisque id, auctor eget nisl. Integer id vestibulum quam. Donec a euismod urna. Nulla sodales aliquam tortor at dignissim. Sed dictum diam sed urna scelerisque, at cursus lacus faucibus. Nunc luctus massa vel diam rutrum, vitae luctus lacus consectetur.
  Sed et elementum mauris, in pellentesque mi. Quisque pellentesque ante sit amet nulla vulputate malesuada. Proin et pulvinar sapien. Ut erat metus, bibendum id elit nec, venenatis imperdiet justo. Praesent malesuada erat ut quam placerat, in facilisis diam blandit. Donec ut suscipit dolor, at finibus quam. Ut interdum, mauris vitae blandit bibendum, augue enim sagittis erat, at pretium arcu est id nisi. Donec sit amet viverra est. Quisque consectetur nisi nec dapibus feugiat. Duis venenatis sollicitudin ligula pharetra pharetra. Etiam scelerisque aliquet scelerisque.`,
};

export const Default = Template.bind({});
Default.args = { ...content };

export const WithSecondaryBackground = Template.bind({});
WithSecondaryBackground.args = {
	...content,
	secondary: true,
};
