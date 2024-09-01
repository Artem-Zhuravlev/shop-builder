import type { Meta, StoryFn } from '@storybook/react';
import { AdminReturnsFilter } from './AdminReturnsFilter';

export default {
	title: 'Entities/Admin/Returns/AdminReturnsFilter',
	component: AdminReturnsFilter,
} as Meta<typeof AdminReturnsFilter>;

const Template: StoryFn<typeof AdminReturnsFilter> = (args) => {
	return <AdminReturnsFilter {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
