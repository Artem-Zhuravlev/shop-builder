import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ButtonBase } from './ButtonBase';

export default {
	title: 'Shared/ButtonBase',
	component: ButtonBase,
	argTypes: { onClick: { action: 'clicked' } },
} as Meta<typeof ButtonBase>;

const Template: StoryFn<typeof ButtonBase> = (args) => <ButtonBase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: 'Text',
	variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
	children: 'Text',
	variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
	children: 'Text',
	variant: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
	children: 'Text',
	variant: 'warning',
};

export const Info = Template.bind({});
Info.args = {
	children: 'Text',
	variant: 'info',
};

export const Light = Template.bind({});
Light.args = {
	children: 'Text',
	variant: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
	children: 'Text',
	variant: 'dark',
};

export const Outline = Template.bind({});
Outline.args = {
	children: 'Text',
	variant: 'outline',
};

export const Link = Template.bind({});
Link.args = {
	children: 'Text',
	variant: 'link',
};

export const Rounded = Template.bind({});
Rounded.args = {
	children: 'Some text for button',
	rounded: true,
};

export const WithRoundedLeftSide = Template.bind({});
WithRoundedLeftSide.args = {
	children: 'Some text for button',
	roundedLeftSide: true,
};

export const WithRoundedRightSide = Template.bind({});
WithRoundedRightSide.args = {
	children: 'Some text for button',
	roundedRightSide: true,
};

export const Large = Template.bind({});
Large.args = {
	children: 'Text',
	large: true,
};

export const withLoading = Template.bind({});
withLoading.args = {
	children: 'Text',
	isLoading: true,
};

export const withDisabled = Template.bind({});
withDisabled.args = {
	children: 'Text',
	disabled: true,
};

export const withFullWidth = Template.bind({});
withFullWidth.args = {
	children: 'Text',
	block: true,
};
