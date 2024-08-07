import type { Meta, StoryFn } from '@storybook/react';
import { AdminAttributesTable } from './AdminAttributesTable';

export default {
	title: 'Entities/Admin/Attributes/AdminAttributesTable',
	component: AdminAttributesTable,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminAttributesTable>;

const Template: StoryFn<typeof AdminAttributesTable> = (args) => {
	return <AdminAttributesTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			attribute_name: 'Clockspeed',
			attribute_group: 'Processor',
			sort_order: 3,
			slug: 'clockspeed',
		},
		{
			id: 2,
			attribute_name: 'Color',
			attribute_group: 'Technical',
			sort_order: 2,
			slug: 'color',
		},
		{
			id: 3,
			attribute_name: 'RAM',
			attribute_group: 'Memory',
			sort_order: 1,
			slug: 'ram',
		},
		{
			id: 4,
			attribute_name: 'Storage',
			attribute_group: 'Memory',
			sort_order: 4,
			slug: 'storage',
		},
		{
			id: 5,
			attribute_name: 'Screen Size',
			attribute_group: 'Display',
			sort_order: 1,
			slug: 'screen-size',
		},
		{
			id: 6,
			attribute_name: 'Battery Life',
			attribute_group: 'Power',
			sort_order: 3,
			slug: 'battery-life',
		},
		{
			id: 7,
			attribute_name: 'Weight',
			attribute_group: 'Physical',
			sort_order: 5,
			slug: 'weight',
		},
		{
			id: 8,
			attribute_name: 'Graphics Card',
			attribute_group: 'Processor',
			sort_order: 2,
			slug: 'graphics-card',
		},
		{
			id: 9,
			attribute_name: 'Operating System',
			attribute_group: 'Software',
			sort_order: 1,
			slug: 'operating-system',
		},
		{
			id: 10,
			attribute_name: 'Warranty',
			attribute_group: 'Support',
			sort_order: 6,
			slug: 'warranty',
		},
		{
			id: 11,
			attribute_name: 'Brand',
			attribute_group: 'General',
			sort_order: 1,
			slug: 'brand',
		},
		{
			id: 12,
			attribute_name: 'Model',
			attribute_group: 'General',
			sort_order: 2,
			slug: 'model',
		},
	],
};
