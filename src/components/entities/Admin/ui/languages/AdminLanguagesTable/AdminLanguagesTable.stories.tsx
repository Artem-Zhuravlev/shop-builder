import type { Meta, StoryFn } from '@storybook/react';
import { AdminLanguagesTable } from './AdminLanguagesTable';

export default {
	title: 'Entities/Admin/Languages/AdminLanguagesTable',
	component: AdminLanguagesTable,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminLanguagesTable>;

const Template: StoryFn<typeof AdminLanguagesTable> = (args) => {
	return <AdminLanguagesTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			sort_order: 1,
			language_name: 'English',
			code: 'en-gb',
			slug: 'english',
		},
		{
			id: 2,
			sort_order: 2,
			language_name: 'Spanish',
			code: 'es-es',
			slug: 'spanish',
		},
		{
			id: 3,
			sort_order: 3,
			language_name: 'French',
			code: 'fr-fr',
			slug: 'french',
		},
		{
			id: 4,
			sort_order: 4,
			language_name: 'German',
			code: 'de-de',
			slug: 'german',
		},
		{
			id: 5,
			sort_order: 5,
			language_name: 'Italian',
			code: 'it-it',
			slug: 'italian',
		},
	],
};
