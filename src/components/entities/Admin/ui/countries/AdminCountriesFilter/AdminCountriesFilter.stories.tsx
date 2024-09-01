import type { Meta, StoryFn } from '@storybook/react';
import { AdminCountriesFilter } from './AdminCountriesFilter';

export default {
	title: 'Entities/Admin/Countries/AdminCountriesFilter',
	component: AdminCountriesFilter,
} as Meta<typeof AdminCountriesFilter>;

const Template: StoryFn<typeof AdminCountriesFilter> = (args) => {
	return <AdminCountriesFilter {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
