import type { Meta, StoryFn } from '@storybook/react';
import { LogoBase } from './LogoBase';

export default {
  title: 'Shared/Icons/LogoBase',
  component: LogoBase,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta<typeof LogoBase>;

const Template: StoryFn<typeof LogoBase> = (args) => <LogoBase {...args} />;

export const Default = Template.bind({});
Default.args = {};
