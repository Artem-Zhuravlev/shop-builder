import { TabsBase } from '@shared/TabsBase';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';

export const AdminCustomersForm: FC = () => {
	const t = useTranslations('base');

	const tabs = [
		{
			label: t('general'),
			description: 'General',
		},
		{
			label: t('addresses'),
			description: 'Addresses',
		},
		{
			label: t('history'),
			description: 'History',
		},
		{
			label: t('reward_points'),
			description: 'Reward points',
		},
	];

	return (
		<div className='form-holder'>
			<TabsBase items={tabs} />
		</div>
	);
};

AdminCustomersForm.displayName = 'AdminCustomersForm';
