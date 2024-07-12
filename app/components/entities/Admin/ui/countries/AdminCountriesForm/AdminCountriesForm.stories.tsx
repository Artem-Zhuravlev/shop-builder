import type { Meta, StoryFn } from '@storybook/react';
import { AdminCountriesForm } from './AdminCountriesForm';

export default {
	title: 'Entities/Admin/Countries/AdminCountriesForm',
	component: AdminCountriesForm,
} as Meta<typeof AdminCountriesForm>;

const Template: StoryFn<typeof AdminCountriesForm> = (args) => {
	return <AdminCountriesForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
