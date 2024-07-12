import type { Meta, StoryFn } from '@storybook/react';
import { AdminGeoZonesForm } from './AdminGeoZonesForm';

export default {
	title: 'Entities/Admin/Geo Zones/AdminGeoZonesForm',
	component: AdminGeoZonesForm,
} as Meta<typeof AdminGeoZonesForm>;

const Template: StoryFn<typeof AdminGeoZonesForm> = (args) => {
	return <AdminGeoZonesForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
