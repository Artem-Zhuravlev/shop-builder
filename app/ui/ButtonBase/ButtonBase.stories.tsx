import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ButtonBase } from './ButtonBase';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Buttons/ButtonBase',
  component: ButtonBase,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta<typeof ButtonBase>;

const Template: StoryFn<typeof ButtonBase> = (args) => <ButtonBase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Text',
  large: true
};

export const Small = Template.bind({});
Small.args = {
  children: 'Text',
  small: true
};

export const withLoading = Template.bind({});
withLoading.args = {
  children: 'Text',
  isLoading: true
};

export const withDisabled = Template.bind({});
withDisabled.args = {
  children: 'Text',
  disabled: true
};

export const withFullWidth = Template.bind({});
withFullWidth.args = {
  children: 'Text',
  disabled: true
};
