import type { Meta, StoryFn } from '@storybook/react';
import { AdminDownloadsTable } from './AdminDownloadsTable';

export default {
	title: 'Entities/Admin/Downloads/AdminDownloadsTable',
	component: AdminDownloadsTable,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta<typeof AdminDownloadsTable>;

const Template: StoryFn<typeof AdminDownloadsTable> = (args) => {
	return <AdminDownloadsTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	nodes: [
		{
			id: 1,
			download_name: 'Airpods.pdf',
			date_added: '2024-09-03',
			slug: 'airpods',
		},
		{
			id: 2,
			download_name: 'iPhone_User_Guide.pdf',
			date_added: '2024-07-02',
			slug: 'iphone-user-guide',
		},
		{
			id: 3,
			download_name: 'MacBook_Pro_Specs.pdf',
			date_added: '2024-07-01',
			slug: 'macbook-pro-specs',
		},
		{
			id: 4,
			download_name: 'Apple_Watch_Setup.pdf',
			date_added: '2024-06-28',
			slug: 'apple-watch-setup',
		},
		{
			id: 5,
			download_name: 'iPad_Pro_Manual.pdf',
			date_added: '2024-06-20',
			slug: 'ipad-pro-manual',
		},
		{
			id: 6,
			download_name: 'Apple_TV_Guide.pdf',
			date_added: '2024-06-15',
			slug: 'apple-tv-guide',
		},
		{
			id: 7,
			download_name: 'iMac_User_Manual.pdf',
			date_added: '2024-06-10',
			slug: 'imac-user-manual',
		},
		{
			id: 8,
			download_name: 'HomePod_Setup.pdf',
			date_added: '2024-06-05',
			slug: 'homepod-setup',
		},
		{
			id: 9,
			download_name: 'Mac_Mini_Specs.pdf',
			date_added: '2024-06-01',
			slug: 'mac-mini-specs',
		},
		{
			id: 10,
			download_name: 'AirTag_User_Guide.pdf',
			date_added: '2024-05-25',
			slug: 'airtag-user-guide',
		},
		{
			id: 11,
			download_name: 'Magic_Mouse_Manual.pdf',
			date_added: '2024-05-20',
			slug: 'magic-mouse-manual',
		},
	],
};
