import { TabsBase } from '@shared/TabsBase';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import {
	AdminCustomersAddressesForm,
	AdminCustomersGeneralForm,
	AdminCustomersHistoryForm,
	AdminCustomersRewardPointsForm,
} from './common';

export const AdminCustomersForm: FC = () => {
	const t = useTranslations('base');

	const tabs = [
		{
			label: t('general'),
			description: <AdminCustomersGeneralForm />,
		},
		{
			label: t('addresses'),
			description: <AdminCustomersAddressesForm />,
		},
		{
			label: t('history'),
			description: <AdminCustomersHistoryForm />,
		},
		{
			label: t('reward_points'),
			description: <AdminCustomersRewardPointsForm />,
		},
	];

	return (
		<div className='form-holder'>
			<TabsBase items={tabs} />
		</div>
	);
};

AdminCustomersForm.displayName = 'AdminCustomersForm';
