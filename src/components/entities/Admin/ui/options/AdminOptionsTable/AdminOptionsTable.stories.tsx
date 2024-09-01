import type { Meta, StoryFn } from '@storybook/react';
import { AdminOptionsTable } from './AdminOptionsTable';

export default {
	title: 'Entities/Admin/Options/AdminOptionsTable',
	component: AdminOptionsTable,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminOptionsTable>;

const Template: StoryFn<typeof AdminOptionsTable> = (args) => {
	return <AdminOptionsTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			sort_order: 1,
			option_name: 'Checkbox',
			slug: 'checkbox',
		},
		{
			id: 2,
			sort_order: 2,
			option_name: 'Color',
			slug: 'color',
		},
		{
			id: 3,
			sort_order: 4,
			option_name: 'Date',
			slug: 'date',
		},
		{
			id: 4,
			sort_order: 5,
			option_name: 'Date & Time',
			slug: 'date-and-time',
		},
	],
};
