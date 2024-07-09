import type { Meta, StoryFn } from '@storybook/react';
import { AdminAffiliatesFilter } from './AdminAffiliatesFilter';

export default {
	title: 'Entities/Admin/Affiliates/AdminAffiliatesFilter',
	component: AdminAffiliatesFilter,
} as Meta<typeof AdminAffiliatesFilter>;

const Template: StoryFn<typeof AdminAffiliatesFilter> = (args) => {
	return <AdminAffiliatesFilter {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
